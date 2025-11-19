import { useEffect, useState } from "react";
import { db } from "../../../firebaseConfig";
import { auth, logout } from "../../../firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function AdminDashboard() {

  const [posts, setPosts] = useState<any[]>([]);
  const [allowed, setAllowed] = useState(false);

  // PROTEGER LA RUTA: solo admin puede entrar
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAllowed(true);
        loadPosts();
      } else {
        window.location.href = "/admin/login";
      }
    });
  }, []);

  const loadPosts = async () => {
    const snap = await getDocs(collection(db, "posts"));
    const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPosts(data);
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("¿Seguro que quieres borrar este post?");
    if (!confirmDelete) return;

    await deleteDoc(doc(db, "posts", id));
    alert("Post borrado");
    loadPosts(); // refrescar lista
  };

  if (!allowed) return <h1>Cargando...</h1>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Panel de Administración</h1>

      <button onClick={logout}>Cerrar sesión</button>

      <h2>Entradas del blog</h2>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Título</th>
            <th>Fecha</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.date}</td>
              <td>
                <a href={`/admin/edit/${post.id}`}>Editar</a>
              </td>
              <td>
                <button onClick={() => handleDelete(post.id)}>
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
