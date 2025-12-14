import { useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";
import SEOHead from "../../components/seo/SEOHead";

type Post = {
  id: string;
  title?: string;
  date?: string;
  imageUrl?: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  readingTime?: string;
  status?: "draft" | "published";
};

function parseDateMaybe(value?: string) {
  // Soporta formatos tipo "2025-12-01", "01/12/2025", etc. (si falla, devuelve 0)
  if (!value) return 0;
  const iso = Date.parse(value);
  if (!Number.isNaN(iso)) return iso;
  // dd/mm/yyyy
  const m = value.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) {
    const d = Number(m[1]);
    const mo = Number(m[2]) - 1;
    const y = Number(m[3]);
    return new Date(y, mo, d).getTime();
  }
  return 0;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const snap = await getDocs(collection(db, "posts"));
      const data = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) })) as Post[];
      setPosts(data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  const visiblePosts = useMemo(() => {
    const onlyPublished = posts.filter((p) => (p.status ? p.status === "published" : true));
    return [...onlyPublished].sort((a, b) => parseDateMaybe(b.date) - parseDateMaybe(a.date));
  }, [posts]);

  const heroStats = useMemo(() => {
    const categories = new Set(visiblePosts.map((p) => p.category).filter(Boolean) as string[]);
    return {
      posts: visiblePosts.length,
      categories: categories.size,
    };
  }, [visiblePosts]);

  return (
    <>
      <SEOHead
        title="Blog | José Sousa"
        description="Artículos, novedades y recursos sobre oposiciones de Justicia."
        path="/blog"
      />
      <Header />

      <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
        {/* Cabecera del blog (no tocamos navbar/footer) */}
        <section className="relative mb-10 overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6 py-8 shadow-sm md:px-10 md:py-10">
          {/* glow decorativo */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
              Recursos y novedades
            </div>

            <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  Blog
                </h1>
                <p className="mt-2 max-w-2xl text-gray-600">
                  Artículos, novedades y recursos. Entra en el post y guárdalo para repasarlo cuando quieras.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 text-center backdrop-blur">
                  <div className="text-lg font-bold text-gray-900">{loading ? "…" : heroStats.posts}</div>
                  <div className="text-xs font-semibold text-gray-600">Entradas</div>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 text-center backdrop-blur">
                  <div className="text-lg font-bold text-gray-900">{loading ? "…" : heroStats.categories}</div>
                  <div className="text-xs font-semibold text-gray-600">Categorías</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {loading ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-700 shadow-sm">
            Cargando entradas...
          </div>
        ) : visiblePosts.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 text-gray-700 shadow-sm">
            Aún no hay entradas publicadas.
          </div>
        ) : (
          <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/article/${post.id}`}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Cabecera de la tarjeta: aquí va SIEMPRE la imagen subida */}
                {post.imageUrl ? (
                  <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    <img
                      src={post.imageUrl}
                      alt={post.title || "Imagen del artículo"}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/9] w-full bg-gradient-to-br from-gray-100 to-gray-200" />
                )}

                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    {post.category ? (
                      <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
                        {post.category}
                      </span>
                    ) : null}

                    {post.readingTime ? (
                      <span className="text-xs text-gray-500">{post.readingTime}</span>
                    ) : null}
                  </div>

                  <h2 className="mt-2  text-lg font-semibold text-gray-900" title={post.title}>
                    {post.title}
                  </h2>

                  {post.date ? <p className="mt-2 text-sm text-gray-600">{post.date}</p> : null}

                  {post.excerpt ? (
                    <p className="mt-3  text-sm text-gray-700">{post.excerpt}</p>
                  ) : null}

                  {post.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-gray-50 px-2.5 py-1 text-xs text-gray-600 ring-1 ring-gray-200"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    Leer artículo
                    <span className="transition group-hover:translate-x-0.5">→</span>
                  </div>
                </div>
              </a>
            ))}
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}
