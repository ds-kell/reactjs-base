import { Routes, Route } from "react-router-dom";
import { AuthRouter } from "./router/AuthRouter"
import useToken from "./useToken";
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import SignUp from "./pages/Login/SignUp";
function App() {

  const { setToken, tokenStorage, token } = useToken();

  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    const config = {
      method: "GET",
      headers: { Authorization: "Bearer " + accessToken.slice(1, -1) },
    };
  }

  return (
    <>
     <Routes>

        <Route path="/" element={<AuthRouter />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </>
  );
}

export default App;
