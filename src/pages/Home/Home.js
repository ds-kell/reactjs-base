import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const messageInputRef = useRef(null);
  const responseDivRef = useRef(null);
  const socket = useRef(new WebSocket("ws://localhost:8088/websocket"));

  socket.current.onopen = function(event) {
    console.log("Connected to WebSocket server");
  };

  socket.current.onmessage = function(event) {
    responseDivRef.current.innerHTML += "<p>" + event.data + "</p>";
  };

  const logout = () => {
    localStorage.clear("token");
    localStorage.clear("userToken");
    localStorage.clear("role");
    navigate("/login");
  };

  const sendMessage = () => {
    const message = messageInputRef.current.value;
    socket.current.send(message);
    messageInputRef.current.value = "";
  };

  return (
    <div>
      <center>
        Hello
        <br />
        <button onClick={logout} htmlType="submit">
          Logout
        </button>
      </center>
      <div>
        <input type="text" ref={messageInputRef} />
        <button onClick={sendMessage}>Send Message</button>
        <div ref={responseDivRef}></div>
      </div>
    </div>
  );
}
