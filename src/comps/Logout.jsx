import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../redux/reducer";
import { motion } from "framer-motion";
import "../css/form.css";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div className="logout">
      <h1>
        Welcome <span className="username">{user.name}</span>
      </h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="logout-btn"
        onClick={(e) => handleLogout(e)}
      >
        log out
      </motion.button>
    </div>
  );
};

export default Logout;
