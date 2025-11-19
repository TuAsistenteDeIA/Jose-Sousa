import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [posts, setPosts] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPosts = async () => {
      const snap = await getDocs(collection(db, "posts"));
      const data = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(data);
    };
    loadPosts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("¿Seguro que quieres eliminar este post?")) return;
    await deleteDoc(doc(db, "posts", id));
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div
      style={{
        background: "#121212",
        color: "#fff",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "10px", fontSize: "28px" }}>
        Panel de Administración
      </h1>

      <button
        onClick={() => navigate("/blog/add")}
        style={{
          background: "#1f6feb",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          margin: "15px 0",
        }}
      >
        ➕ Añadir nuevo post
      </button>

      <button
        onClick={() => {
          localStorage.removeItem("authUser");
          navigate("/admin/login");
        }}
        style={{
          marginLeft: "20px",
          background: "transparent",
          color: "#ff6b6b",
          border: "1px solid #ff6b6b",
          padding: "10px 15px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        🔒 Cerrar sesión
      </button>

      <h2 style={{ marginTop: "30px" }}>Entradas del blog</h2>

      <div style={{ overflowX: "auto", marginTop: "20px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#1e1e1e",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ background: "#2c2c2c" }}>
              <th style={thStyle}>Título</th>
              <th style={thStyle}>Fecha</th>
              <th style={thStyle}>Editar</th>
              <th style={thStyle}>Borrar</th>
            </tr>
          </thead>

          <tbody>
            {posts.map((post) => (
              <tr key={post.id} style={{ borderBottom: "1px solid #333" }}>
                <td style={tdStyle}>{post.title}</td>
                <td style={tdStyle}>{post.date}</td>

                <td style={tdStyle}>
                  <button
                    onClick={() => navigate(`/admin/edit/${post.id}`)}
                    style={editBtn}
                  >
                    ✏️ Editar
                  </button>
                </td>

                <td style={tdStyle}>
                  <button
                    onClick={() => handleDelete(post.id)}
                    style={deleteBtn}
                  >
                    🗑️ Borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  textAlign: "left" as const,
  fontWeight: "bold",
  color: "#d1d1d1",
};

const tdStyle = {
  padding: "12px",
  color: "#e8e8e8",
};

const editBtn = {
  background: "#1f6feb",
  color: "white",
  padding: "6px 14px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#ff4d4d",
  color: "white",
  padding: "6px 14px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
