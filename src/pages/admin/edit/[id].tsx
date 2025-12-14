import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { auth } from "../../../firebaseAuth";
import { db, storage } from "../../../firebaseConfig";

type Attachment = {
  name: string;
  url: string;
  type?: string;
  size?: number;
};

function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u")
    .replace(/ñ/g, "n")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Básicos
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  // Meta
  const [category, setCategory] = useState("General");
  const [tagsText, setTagsText] = useState("");
  const [author, setAuthor] = useState("José Sousa");
  const [readingTime, setReadingTime] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("published");

  // Imagen
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState<File | null>(null);

  // Adjuntos
  const [existingAttachments, setExistingAttachments] = useState<Attachment[]>([]);
  const [newAttachments, setNewAttachments] = useState<File[]>([]);

  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string>("");

  const imagePreviewUrl = useMemo(() => {
    if (image) return URL.createObjectURL(image);
    return "";
  }, [image]);

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    };
  }, [imagePreviewUrl]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAllowed(true);
      } else {
        navigate("/admin/login", { replace: true });
      }
    });
    return () => unsub();
  }, [navigate]);

  useEffect(() => {
    const loadPost = async () => {
      if (!id) return;
      setLoading(true);
      setError("");

      try {
        const refDoc = doc(db, "posts", id);
        const snap = await getDoc(refDoc);
        if (!snap.exists()) throw new Error("No se encontró el post.");
        const data = snap.data() as any;

        setTitle(data.title || "");
        setExcerpt(data.excerpt || "");
        setContent(data.content || "");

        setCategory(data.category || "General");
        setTagsText(Array.isArray(data.tags) ? data.tags.join(", ") : "");
        setAuthor(data.author || "José Sousa");
        setReadingTime(data.readingTime || "");
        setStatus((data.status as any) || "published");

        setImageUrl(data.imageUrl || "");
        setExistingAttachments(Array.isArray(data.attachments) ? (data.attachments as Attachment[]) : []);
        setNewAttachments([]);
      } catch (e: any) {
        setError(e?.message || "Error cargando el post.");
      } finally {
        setLoading(false);
      }
    };

    if (allowed) loadPost();
  }, [allowed, id]);

  const handleUpdate = async (e: any) => {
    e.preventDefault();
    if (!id) return;
    setSaving(true);
    setError("");

    try {
      if (!title.trim()) throw new Error("El título es obligatorio.");
      if (!content.trim()) throw new Error("El contenido es obligatorio.");

      // Imagen: si el admin selecciona una nueva, se sube y se reemplaza el imageUrl
      let nextImageUrl = imageUrl;
      if (image) {
        if (image.size > 7 * 1024 * 1024) throw new Error("La imagen pesa demasiado (máx 7MB).");
        const safeName = `${Date.now()}-${image.name}`.replace(/\s+/g, "-");
        const storageRef = ref(storage, `blog/${safeName}`);
        await uploadBytes(storageRef, image, { contentType: image.type || "image/jpeg" });
        nextImageUrl = await getDownloadURL(storageRef);
      }

      // Adjuntos nuevos: se suben y se añaden a los existentes
      let mergedAttachments: Attachment[] = Array.isArray(existingAttachments)
        ? [...existingAttachments]
        : [];

      if (newAttachments.length) {
        if (newAttachments.length > 10) throw new Error("Máximo 10 adjuntos nuevos por edición.");

        const baseSlug = slugify(title);
        for (const file of newAttachments) {
          if (file.size > 15 * 1024 * 1024) {
            throw new Error(`El archivo "${file.name}" pesa demasiado (máx 15MB).`);
          }

          const safeName = `${Date.now()}-${file.name}`.replace(/\s+/g, "-");
          const attRef = ref(storage, `blog-attachments/${baseSlug}/${safeName}`);
          await uploadBytes(attRef, file, { contentType: file.type || "application/octet-stream" });
          const url = await getDownloadURL(attRef);

          mergedAttachments.push({
            name: file.name,
            url,
            type: file.type,
            size: file.size,
          });
        }
      }

      const tags = tagsText
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const slug = slugify(title);
      const now = new Date();

      await updateDoc(doc(db, "posts", id), {
        title: title.trim(),
        slug,
        excerpt: excerpt.trim(),
        content,

        imageUrl: nextImageUrl,

        attachments: mergedAttachments,

        category: category.trim(),
        tags,
        author: author.trim(),
        readingTime: readingTime.trim(),
        status,
        updatedAt: now.toISOString(),
      });

      alert("Post actualizado");
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err?.message || "Ha ocurrido un error al actualizar.");
    } finally {
      setSaving(false);
    }
  };

  if (!allowed || loading) {
    return <div className="min-h-screen bg-[#0b1220] p-6 text-white">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0b1220] px-4 py-10 text-white">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Editar entrada</h1>
          <p className="mt-2 text-sm text-white/70">
            Si cambias la imagen, se actualizará también la cabecera de la tarjeta del blog.
          </p>
        </header>

        <form onSubmit={handleUpdate} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
          <label className="block text-sm font-semibold text-white/90">Título</label>
          <input
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-white/90">Categoría</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/90">Autor</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/90">Tiempo de lectura</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
                value={readingTime}
                onChange={(e) => setReadingTime(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/90">Estado</label>
              <select
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0b1220] px-4 py-3 text-white outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
                value={status}
                onChange={(e) => setStatus(e.target.value as any)}
              >
                <option value="published">Publicado</option>
                <option value="draft">Borrador</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-white/90">Tags (separados por comas)</label>
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
              value={tagsText}
              onChange={(e) => setTagsText(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-white/90">Extracto (para la tarjeta)</label>
            <textarea
              className="mt-2 min-h-[90px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-white/90">Imagen de portada</label>
            <input
              type="file"
              accept="image/*"
              className="mt-2 block w-full text-sm text-white/70 file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-white file:hover:bg-white/15"
              onChange={(e) => {
                const file = e.target.files?.[0];
                setImage(file || null);
              }}
            />

            {imagePreviewUrl ? (
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={imagePreviewUrl} alt="Nueva imagen" className="h-auto w-full object-cover" />
              </div>
            ) : imageUrl ? (
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <img src={imageUrl} alt="Imagen actual" className="h-auto w-full object-cover" />
              </div>
            ) : null}
          </div>

          <div className="mt-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <label className="block text-sm font-semibold text-white/90">Archivos adjuntos</label>
                <p className="mt-1 text-xs text-white/60">
                  Puedes añadir PDFs, plantillas, ZIPs… (máx 10 archivos nuevos, 15MB por archivo). También puedes quitar los que ya existen.
                </p>
              </div>
              {existingAttachments.length ? (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  {existingAttachments.length} adjunto(s)
                </span>
              ) : null}
            </div>

            {existingAttachments.length ? (
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-semibold text-white/80">Adjuntos actuales</div>
                <ul className="mt-2 space-y-2 text-sm text-white/80">
                  {existingAttachments.map((a) => (
                    <li key={a.url} className="flex items-center justify-between gap-3">
                      <a href={a.url} target="_blank" rel="noreferrer" className="truncate hover:underline">
                        {a.name || "Archivo"}
                      </a>
                      <button
                        type="button"
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 hover:bg-white/10"
                        onClick={() => setExistingAttachments((prev) => prev.filter((x) => x.url !== a.url))}
                      >
                        Quitar
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
                No hay adjuntos en esta entrada.
              </div>
            )}

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold text-white/80">Añadir adjuntos nuevos</div>
                {newAttachments.length ? (
                  <span className="text-xs text-white/60">{newAttachments.length} archivo(s)</span>
                ) : null}
              </div>

              <input
                type="file"
                multiple
                className="mt-2 block w-full text-sm text-white/70 file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-white file:hover:bg-white/15"
                onChange={(e) => {
                  const files = Array.from(e.target.files || []);
                  setNewAttachments(files);
                }}
              />

              {newAttachments.length ? (
                <ul className="mt-3 space-y-2">
                  {newAttachments.map((f) => (
                    <li key={f.name} className="flex items-center justify-between gap-3">
                      <span className="truncate text-sm text-white/90">{f.name}</span>
                      <button
                        type="button"
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 hover:bg-white/10"
                        onClick={() => setNewAttachments((prev) => prev.filter((x) => x !== f))}
                      >
                        Quitar
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-white/90">Contenido (texto o HTML)</label>
            <textarea
              className="mt-2 min-h-[260px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          {error ? (
            <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={saving}
            className="mt-6 w-full rounded-xl bg-[#1f6feb] px-4 py-3 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {saving ? "Guardando..." : "Guardar cambios"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/dashboard")}
            className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-white/90 hover:bg-white/10"
          >
            Volver
          </button>
        </form>
      </div>
    </div>
  );
}
