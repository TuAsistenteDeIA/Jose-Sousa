import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { auth } from "../../../firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function EditPostPage() {

  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAllowed(true);
        loadPost();
      } else {
        window.location.href = "/admin/login";
      }
    });
  }, []);

  const loadPost = async () => {
    if (!id) return;

    const ref = doc(db, "posts", id);
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data();
      setTitle(data.title);
      setContent(data.content);
    }
  };

  const handleUpdate = async (e: any) => {
    e.preventDefault();

    await updateDoc(doc(db, "posts", id as string), {
      title,
      content
    });

    alert("Post actualizado");
    window.location.href = "/admin/dashboard";
  };

  if (!allowed) return <h1>Cargando...</h1>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Editar post</h1>

      <form onSubmit={handleUpdate} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          rows={8}
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Guardar cambios</button>
      </form>

    </div>
  );
}
