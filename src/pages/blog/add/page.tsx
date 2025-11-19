import { useState, useEffect } from "react";
import { db } from "../../../firebaseConfig";
import { auth } from "../../../firebaseAuth";
import { collection, addDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function AddBlogPage() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAllowed(true);
      } else {
        window.location.href = "/admin/login";
      }
    });
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await addDoc(collection(db, "posts"), {
      title,
      content,
      date: new Date().toISOString().slice(0, 10)
    });

    alert("Post creado correctamente");
    setTitle("");
    setContent("");
  };

  if (!allowed) return <h1>Cargando...</h1>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Crear entrada</h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10 }}>

        <input
          type="text"
          placeholder="Título del post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Contenido del post"
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button type="submit">Guardar post</button>

      </form>
    </div>
  );
}
