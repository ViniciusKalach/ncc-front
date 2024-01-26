import { useState } from "react";
import { Link } from "react-router-dom";
import netflix_logo from "../assets/netflex_logo.svg";
import netflexBackground from "../assets/netflexbackground.svg";
import "../styles/RegisterPage.css";
import { createUser } from "../services/APIService";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const linkedin =
    "https://www.linkedin.com/in/vinícius-kalach-freitas-cato-a91951192";

  const handleRegister = async () => {
    try {
      // Chame a função loginUser do APIService
      const response = await createUser(email, password, name);

      console.log("Cadastro bem-sucedido:", response);
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error);
    }
    // Lógica de autenticação aqui
    console.log("Nome:", name, "Email:", email, "Senha:", password);
  };

  return (
    <><div>
      <div className="dark-overlay"></div>
      <img
        src={netflexBackground}
        className="background-register-image"
        alt="Background" />
      <div className="register-container">
        <img src={netflix_logo} className="logo-r" alt="Netflix Logo" />
        <div className="register-content">
          <h1 className="FSMSL">Filmes, séries e muito mais, sem limites</h1>
          <div className="register-card">
            <h3>Assine onde quiser. Cancele quando quiser.</h3>
            <label>
              Nome:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Email:
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Senha:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="button" onClick={handleRegister}>
              Criar conta
            </button>
            <div className="login-text">
              Já tem uma conta? <Link to="/login">Entrar agora.</Link>
            </div>
          </div>
          <p className="read-the-docs">By Vinícius Kalach</p>
        </div>
      </div>
    </div><footer className="footer-container">
        <div className="footer-content">
          <div className="contact">
            <h3>Contato</h3>
            <p>
              viniciuscato@hotmail.com |{" "}
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div className="about-us">
          <h3>Sobre Nós</h3>
          <p>Netflex - Sua plataforma de streaming favorita.</p>
        </div>
      </footer>
      </>
  );
}

export default RegisterPage;
