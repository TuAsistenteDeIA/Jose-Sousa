import { useState } from "react";
import { login } from "../../../firebaseAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      await login(email, password);
      alert("Bienvenido administrador!");
      window.location.href = "/admin/dashboard";
    } catch (error) {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Acceso administrador</h1>

      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 10 }}>

        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>

      </form>
    </div>
  );
}
