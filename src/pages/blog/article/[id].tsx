import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Header from "../../../components/feature/Header";
import Footer from "../../../components/feature/Footer";
import SEOHead from "../../../components/seo/SEOHead";

export default function ArticlePage() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      const ref = doc(db, "posts", id as string);
      const snap = await getDoc(ref);
      if (snap.exists()) setPost(snap.data());
      setLoading(false);
    };
    if (id) loadPost();
  }, [id]);

  const isHtml = useMemo(() => {
    const c = (post?.content || "") as string;
    return /<\/?[a-z][\s\S]*>/i.test(c);
  }, [post]);

  return (
    <>
      <SEOHead
        title={post?.title || "Artículo | José Sousa"}
        description={post?.excerpt || "Artículo del blog."}
        path={id ? `/blog/article/${id}` : "/blog"}
      />
      <Header />

      <main className="mx-auto w-full max-w-4xl px-5 py-10 md:px-8">
        {loading ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-700 shadow-sm">
            Cargando artículo...
          </div>
        ) : !post ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-700 shadow-sm">
            No se ha encontrado el artículo.
          </div>
        ) : (
          <>
            <header className="mb-8">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-7 shadow-sm">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-sky-200/30 blur-3xl" />

                <div className="relative">
                  {post.category ? (
                    <div className="mb-3">
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
                        {post.category}
                      </span>
                    </div>
                  ) : null}

                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                    {post.title}
                  </h1>

                  <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-600">
                {post.date ? <span>{post.date}</span> : null}
                {post.author ? <span>• {post.author}</span> : null}
                {post.readingTime ? <span>• {post.readingTime}</span> : null}
                  </div>

                  {post.excerpt ? (
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700">
                      {post.excerpt}
                    </p>
                  ) : null}

                  {Array.isArray(post.tags) && post.tags.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {post.tags.slice(0, 12).map((t: string) => (
                        <span
                          key={t}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 ring-1 ring-gray-200"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50"
                >
                  ← Volver al blog
                </a>

                <button
                  type="button"
                  onClick={() => {
                    const url = window.location.href;
                    if (navigator.share) {
                      navigator.share({ title: post.title, url }).catch(() => {});
                    } else {
                      navigator.clipboard?.writeText(url);
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50"
                  title="Compartir"
                >
                  Compartir
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const url = window.location.href;
                    navigator.clipboard?.writeText(url);
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50"
                  title="Copiar enlace"
                >
                  Copiar enlace
                </button>
                  </div>
                </div>
              </div>
            </header>

            {post.imageUrl ? (
              <div className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : null}

            {Array.isArray(post.attachments) && post.attachments.length ? (
              <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-sm font-semibold text-gray-900">Archivos adjuntos</h2>
                  <span className="text-xs text-gray-500">{post.attachments.length} archivo(s)</span>
                </div>
                <div className="mt-3 divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-100">
                  {post.attachments.map((a: any) => (
                    <a
                      key={a.url}
                      href={a.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-4 px-4 py-3 text-sm hover:bg-gray-50"
                    >
                      <div className="min-w-0">
                        <p className="truncate font-medium text-gray-900">{a.name || "Archivo"}</p>
                        <p className="text-xs text-gray-500">
                          {a.type ? a.type : "archivo"}
                          {a.size ? ` • ${(Number(a.size) / (1024 * 1024)).toFixed(2)} MB` : ""}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-800">
                        Descargar
                      </span>
                    </a>
                  ))}
                </div>
              </section>
            ) : null}

            {(post.author || post.readingTime || post.category) ? (
              <section className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold text-gray-900">{post.author || "Autor"}</span>
                    {post.category ? <span className="text-gray-500"> • {post.category}</span> : null}
                    {post.readingTime ? <span className="text-gray-500"> • {post.readingTime}</span> : null}
                  </div>
                  {post.updatedAt ? (
                    <div className="text-xs text-gray-500">Actualizado: {String(post.updatedAt).slice(0, 10)}</div>
                  ) : null}
                </div>
              </section>
            ) : null}

            <article className="article-content rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              {isHtml ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                String(post.content || "")
                  .split("\n\n")
                  .filter(Boolean)
                  .map((p: string, i: number) => (
                    <p key={i}>
                      {p.split("\n").map((line, j) => (
                        <span key={j}>
                          {line}
                          {j < p.split("\n").length - 1 ? <br /> : null}
                        </span>
                      ))}
                    </p>
                  ))
              )}
            </article>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}
