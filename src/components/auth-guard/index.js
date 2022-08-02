import { useAuthContext } from "../../contexts";
import { Navigate, useLocation } from "react-router-dom";

export const AuthGuard = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children;
};
