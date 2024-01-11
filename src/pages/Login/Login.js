import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Hàm xử lý yêu cầu đăng nhập
export async function loginUser(credentials) {
  try {
    const response = await axios.post(
      "http://localhost:8088/api/public/auth/login",
      credentials
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw error;
    }
  }
}

export default function Login({ setToken }) {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hàm xử lý khi nhấn nút Đăng nhập
  const handleLogin = async () => {
    try {
      const response = await loginUser({ username, password });
      if (response) {
        setToken(response);
        localStorage.setItem("username", username);
        navigate("/home");
        window.location.reload();
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleForgotPassword = () => {
    
  };
  return (
    <div>
      <center>
        <h4>Đăng nhập</h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            onChange={(e) => setUserName(e.target.value)}
          />
          <br></br>
          <input
            type="password"
            placeholder="Mật khẩu"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <button onClick={handleForgotPassword}>Quên mật khẩu</button>
          <button onClick={handleLogin}>Đăng nhập</button>
          <button onClick={handleSignUp}>Đăng ký</button>
          {error && <div className="error">{error}</div>}
        </form>
      </center>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
