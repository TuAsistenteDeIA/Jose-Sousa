import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function BlogPage() {

  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      const snap = await getDocs(collection(db, "posts"));
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  if (loading) return <h1 style={{ padding: 20 }}>Cargando...</h1>;

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "30px" }}>Blog</h1>

      <div style={{ display: "grid", gap: "25px" }}>
        {posts.map(post => (
          <a
            key={post.id}
            href={`/blog/article/${post.id}`}
            style={{
              padding: "20px",
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
            }}
          >
            <h2 style={{ margin: "0 0 8px 0" }}>{post.title}</h2>
            <p style={{ margin: 0, color: "#666" }}>{post.date}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
