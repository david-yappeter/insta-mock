import React, { useState } from "react";

import axios from "axios";

const LoginForm = () => {
  const [currentUser, setCurrentUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      "Project-ID": "94b2e0fd-b726-4b6b-aa82-07aee5c32e3d",
      "User-Name": currentUser.username,
      "User-Secret": currentUser.password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", currentUser.username);
      localStorage.setItem("password", currentUser.password);

      window.location.reload();
    } catch (error) {
      setError("Oops, incorrect credentials.");
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser(() => {
      return {
        ...currentUser,
        [name]: value,
      };
    });
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title"> Chat Application </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={currentUser.username}
            onChange={handleOnChange}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            value={currentUser.password}
            onChange={handleOnChange}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span> Start Chatting </span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
