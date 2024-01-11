import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp({ setToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8088/api/public/auth/verify-signup",
        {
          username,
          email,
          password,
          verifyCode,
          authorities : []
        }
      );
      if (response.data.message === "Created") {
        const token = response.data.accessToken;
        if (token) {
          setToken(token);
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetVerifyCode = async () => {
    await axios.post(
        "http://localhost:8088/api/public/auth/signup",
        {
          username,
          email,
        }
      );
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <center>
        <h4>Đăng ký</h4>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Tên người dùng"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <input
            placeholder="Địa chỉ emal"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <input
            placeholder="Mật khẩu"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <input
            placeholder="Mã xác thực"
            type="text"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
          />
          <button type="submit" onClick={handleGetVerifyCode}>
            Nhận mã
          </button>
          <br></br>

          <button type="submit">Đăng ký</button>
          <button onClick={handleLogin}>Đăng nhập</button>
        </form>
      </center>
    </div>
  );
}
