import './App.css';
import { Routes, Route } from "react-router-dom";
import { AuthRouter } from "./router/AuthRouter"
import useToken from "./components/login/useToken";


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
          {/* <Route index element={<Home />} /> */}
        </Route>

      </Routes>
    </>
  );
}

export default App;
