import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts";

import { AuthGuard, Layout } from "./components";

import { HomePage, ProfilePage, SigninPage } from "./pages";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signin" element={<SigninPage />}></Route>
          <Route
            path="/profile"
            element={
              <AuthGuard>
                <ProfilePage />
              </AuthGuard>
            }
          ></Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default App;
