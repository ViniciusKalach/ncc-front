// RegisterPage.js
import FloatingLabelInput from '../components/FloatingLabelInput';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div className="register-container">
      <h2>Crie sua conta</h2>
      <form>
        <FloatingLabelInput
          label="Nome"
          type="text"
          placeholder="Seu nome"
          name="name"
          id="name"
          required
        />
        <FloatingLabelInput
          label="Email"
          type="email"
          placeholder="Seu email"
          name="email"
          id="email"
          required
        />
        <FloatingLabelInput
          label="Senha"
          type="password"
          placeholder="Escolha uma senha"
          name="password"
          id="password"
          required
        />
        <button type="submit">Registrar</button>
      </form>
      <div className="login-link">
      Já possui uma conta? <Link to="/login">Faça login.</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
