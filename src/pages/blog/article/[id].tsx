import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function ArticlePage() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const loadPost = async () => {
      const ref = doc(db, "posts", id as string);
      const snap = await getDoc(ref);
      if (snap.exists()) setPost(snap.data());
    };
    if (id) loadPost();
  }, [id]);

  if (!post) return <h1 style={{ padding: 20 }}>Cargando...</h1>;

  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      
      <h1 style={{ fontSize: "2.4rem", marginBottom: "10px" }}>
        {post.title}
      </h1>

      <p style={{ color: "#777", marginBottom: "30px" }}>
        Publicado el {post.date}
      </p>

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          fontSize: "1.1rem",
          lineHeight: "1.7"
        }}
      >
        {post.content}
      </div>

      <a
        href="/blog"
        style={{
          display: "inline-block",
          marginTop: "25px",
          color: "#005eff",
          fontWeight: "bold"
        }}
      >
        ← Volver al blog
      </a>

    </div>
  );
}
