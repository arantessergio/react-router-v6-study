import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthContext } from "../../contexts";
import { Container } from "./styles";

const SigninPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const { setUser } = useAuthContext();

  const handleChange = (key, value) => setForm((x) => ({ ...x, [key]: value }));

  const from = location.state?.from?.pathname || "/";

  const signin = () => {
    setUser(form)
    navigate(from, { replace: true });
  }

  return (
    <Container>
      <input
        type="email"
        placeholder="Email"
        onChange={({ target: { value } }) => handleChange("email", value)}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={({ target: { value } }) => handleChange("password", value)}
      />
      <button onClick={signin}>Entrar</button>
    </Container>
  );
};

export default SigninPage;
