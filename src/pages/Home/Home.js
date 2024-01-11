import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("token");
    localStorage.clear("userToken");
    localStorage.clear("role");
    navigate("/login");
  };
  return (
    <div>
      <center>
        Hello
        <br></br>
        <button onClick={logout} htmlType="submit">
          Logout
        </button>
      </center>
    </div>
  );
}
