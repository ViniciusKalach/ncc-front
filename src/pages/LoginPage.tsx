import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import netflex_logo from "../assets/netflex_logo.svg";
import netflexBackground from "../assets/netflexbackground.svg"; 
import "../styles/LoginPage.css";
import "../index.css";
import { loginUser } from "../services/APIService";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Chame a função loginUser do APIService
      const response = await loginUser(email, password);

      console.log("Login bem-sucedido:", response);

      navigate("/vitrine");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
    // Lógica de autenticação aqui
    console.log("Email:", email, "Senha:", password);
  };

  return (
    <div>
      {" "}
      <img
        src={netflexBackground}
        className="background-image"
        alt="Background"
      />
      <div className="login-container">
        <div className="content">
          <img src={netflex_logo} className="logo" alt="Netflix Logo" />
          <div className="login-card">
            <h1>Entrar</h1>
            <label>
              Email:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Senha:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button type="button" onClick={handleLogin}>
              Entrar
            </button>
            <div className="signup-text">
              Novo por aqui? <Link to="/registro">Assine agora.</Link>
            </div>
            <p className="read-the-docs">By Vinícius Kalach</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
