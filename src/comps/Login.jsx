import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducer";
import { motion } from "framer-motion";
import "../css/form.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      return alert("pls fill the inputs!");
    }
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  };
  return (
    <div className="login">
      <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
        <h1>login here</h1>
        <motion.input
          whileHover={{
            scale: 0.9,
            transition: { type: "spring" },
            duration: 0.1,
          }}
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="name"
          placeholder="name"
        />
        <motion.input
          whileHover={{
            scale: 0.9,
            transition: { type: "spring" },
            duration: 0.1,
          }}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email"
        />
        <motion.input
          whileHover={{
            scale: 0.9,
            transition: { type: "spring" },
            duration: 0.1,
          }}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="password"
        />
        <button type="submit" className="submit-btn">
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
