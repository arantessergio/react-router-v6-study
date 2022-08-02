import { Container, SideBar, Button } from "./styles";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts";

const Layout = () => {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();

  const signout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <Container>
      <SideBar>
        <Button to="/">Home</Button>
        <Button to="/profile">Profile</Button>
        {!!user && <div>{user.email}</div>}
        {!!user && <button onClick={signout}>Sair</button>}
      </SideBar>

      <Outlet />
    </Container>
  );
};

export default Layout;
