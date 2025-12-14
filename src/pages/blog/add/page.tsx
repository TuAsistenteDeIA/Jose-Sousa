import { useEffect, useMemo, useState } from "react";
import { db, storage } from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

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

export default function AddBlogPage() {
  // Básicos
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  // Meta / organización
  const [category, setCategory] = useState("General");
  const [tagsText, setTagsText] = useState(""); // coma separada
  const [author, setAuthor] = useState("José Sousa");
  const [readingTime, setReadingTime] = useState(""); // ej: "6 min"
  const [status, setStatus] = useState<"draft" | "published">("published");

  // Imagen
  const [image, setImage] = useState<File | null>(null);

  // Archivos adjuntos (PDFs, plantillas, etc.)
  const [attachments, setAttachments] = useState<File[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const imagePreviewUrl = useMemo(() => {
    if (!image) return "";
    return URL.createObjectURL(image);
  }, [image]);

  const attachmentsLabel = useMemo(() => {
    if (!attachments.length) return "";
    if (attachments.length === 1) return attachments[0].name;
    return `${attachments.length} archivos seleccionados`;
  }, [attachments]);

  useEffect(() => {
    return () => {
      if (imagePreviewUrl) URL.revokeObjectURL(imagePreviewUrl);
    };
  }, [imagePreviewUrl]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!title.trim()) throw new Error("El título es obligatorio.");
      if (!content.trim()) throw new Error("El contenido es obligatorio.");

      let imageUrl = "";
      let uploadedAttachments: Attachment[] = [];

      if (image) {
        if (image.size > 7 * 1024 * 1024) {
          throw new Error("La imagen pesa demasiado (máx 7MB).");
        }

        const safeName = `${Date.now()}-${image.name}`.replace(/\s+/g, "-");
        const storageRef = ref(storage, `blog/${safeName}`);

        await uploadBytes(storageRef, image, { contentType: image.type || "image/jpeg" });
        imageUrl = await getDownloadURL(storageRef);
      }

      // Adjuntos (pdf, doc, zip, etc.)
      if (attachments.length) {
        if (attachments.length > 10) throw new Error("Máximo 10 adjuntos por entrada.");

        for (const file of attachments) {
          if (file.size > 15 * 1024 * 1024) {
            throw new Error(`El archivo "${file.name}" pesa demasiado (máx 15MB).`);
          }

          const safeName = `${Date.now()}-${file.name}`.replace(/\s+/g, "-");
          const storageRef = ref(storage, `blog-attachments/${slugify(title)}/${safeName}`);
          await uploadBytes(storageRef, file, { contentType: file.type || "application/octet-stream" });
          const url = await getDownloadURL(storageRef);

          uploadedAttachments.push({
            name: file.name,
            url,
            type: file.type,
            size: file.size,
          });
        }
      }

      const now = new Date();
      const date = now.toLocaleDateString("es-ES", { year: "numeric", month: "2-digit", day: "2-digit" });

      const tags = tagsText
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const slug = slugify(title);

      await addDoc(collection(db, "posts"), {
        title: title.trim(),
        slug,
        excerpt: excerpt.trim(),
        content,
        date,

        imageUrl,

        attachments: uploadedAttachments,

        category: category.trim(),
        tags,
        author: author.trim(),
        readingTime: readingTime.trim(),
        status,
        createdAt: now.toISOString(),
        updatedAt: now.toISOString(),
      });

      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err?.message || "Ha ocurrido un error al publicar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1220] px-4 py-10 text-white">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Nueva entrada del blog</h1>
          <p className="mt-2 text-sm text-white/70">
            Consejo: usa una imagen horizontal (16:9). Se mostrará como cabecera de la tarjeta y portada del artículo.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
          <label className="block text-sm font-semibold text-white/90">Título</label>
          <input
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
            placeholder="Ej: Novedades en Tramitación 2025"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm font-semibold text-white/90">Categoría</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
                placeholder="General"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/90">Autor</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
                placeholder="José Sousa"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/90">Tiempo de lectura</label>
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
                placeholder="Ej: 6 min"
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
              placeholder="ej: tramitación, convocatoria, temario"
              value={tagsText}
              onChange={(e) => setTagsText(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-semibold text-white/90">Extracto (para la tarjeta del blog)</label>
            <textarea
              className="mt-2 min-h-[90px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
              placeholder="2-3 líneas para que se vea bien en la tarjeta."
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
                <img src={imagePreviewUrl} alt="Previsualización" className="h-auto w-full object-cover" />
              </div>
            ) : null}
          </div>

          <div className="mt-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <label className="block text-sm font-semibold text-white/90">Archivos adjuntos (opcional)</label>
                <p className="mt-1 text-xs text-white/60">
                  Puedes adjuntar PDFs, plantillas, ZIPs… (máx 10 archivos, 15MB por archivo).
                </p>
              </div>
              {attachments.length ? (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  {attachmentsLabel}
                </span>
              ) : null}
            </div>

            <input
              type="file"
              multiple
              className="mt-3 block w-full text-sm text-white/70 file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-white file:hover:bg-white/15"
              onChange={(e) => {
                const files = Array.from(e.target.files || []);
                setAttachments(files);
              }}
            />

            {attachments.length ? (
              <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs font-semibold text-white/80">Adjuntos seleccionados</div>
                <ul className="mt-2 space-y-2 text-sm text-white/80">
                  {attachments.map((f) => (
                    <li key={f.name} className="flex items-center justify-between gap-3">
                      <span className="truncate">{f.name}</span>
                      <button
                        type="button"
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 hover:bg-white/10"
                        onClick={() => setAttachments((prev) => prev.filter((x) => x !== f))}
                      >
                        Quitar
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="mt-6">
            <label className="block text-sm font-semibold text-white/90">Contenido (texto o HTML)</label>
            <textarea
              className="mt-2 min-h-[260px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#1f6feb]/60"
              placeholder="Escribe el post aquí..."
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
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-[#1f6feb] px-4 py-3 font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Publicando..." : "Publicar entrada"}
          </button>
        </form>
      </div>
    </div>
  );
}
