import { useState } from "react";
import { db, storage } from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export default function AddBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = "";

    try {
      // 👉 Subir imagen al bucket correcto
      if (image) {
        const imageRef = ref(
          storage,
          `blogImages/${Date.now()}-${image.name}`
        );

        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      // 👉 Guardar en Firestore
      await addDoc(collection(db, "posts"), {
        title,
        content,
        date: new Date().toLocaleDateString(),
        imageUrl,
      });

      alert("Post publicado 🎉");
      navigate("/admin/dashboard");
    } catch (error: any) {
      console.error("🔥 ERROR SUBIENDO POST:", error);
      alert("Error al subir el post: " + (error.message || error));
    }
    

    setLoading(false);
  };

  return (
    <div
      style={{
        background: "#121212",
        minHeight: "100vh",
        color: "#ffffff",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "28px" }}>Crear nueva entrada</h1>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "30px",
          background: "#1e1e1e",
          padding: "25px",
          borderRadius: "12px",
          maxWidth: "700px",
        }}
      >
        <label style={labelStyle}>Título</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={inputStyle}
        />

        <label style={labelStyle}>Contenido</label>
        <textarea
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            ...inputStyle,
            height: "180px",
            resize: "vertical",
          }}
        ></textarea>

        <label style={labelStyle}>Imagen destacada</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          style={{
            marginBottom: "20px",
            padding: "10px 0",
            color: "#cfcfcf",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            background: "#1f6feb",
            padding: "12px 20px",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "16px",
            width: "100%",
          }}
        >
          {loading ? "Publicando..." : "Publicar entrada"}
        </button>
      </form>
    </div>
  );
}

const labelStyle = {
  display: "block",
  margin: "10px 0 5px",
  fontWeight: "bold",
  color: "#d1d1d1",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #333",
  background: "#2c2c2c",
  color: "#fff",
  marginBottom: "20px",
  fontSize: "16px",
};
