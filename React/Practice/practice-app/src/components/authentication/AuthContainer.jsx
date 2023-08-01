import React, { useState, useEffect } from "react";
import "../../index.css";
import Login from "./Login";
import Register from "./Register";
import { motion } from "framer-motion";

function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);
  const [animationDirection, setAnimationDirection] = useState(1);

  useEffect(() => {
    setAnimationDirection(isLogin ? 1 : -1);
  }, [isLogin]);

  return (
    <motion.div
      className="gradient-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        key={isLogin ? "login" : "register"} // Add key prop to trigger re-mount and animation
        className="view-container"
        // animate a slide in each time the view changes
        initial={{ x: `${animationDirection * 100}vw` }} // Initial position based on animationDirection
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 220 , damping: 50}} // Use the same spring animation for both views
      >
        {isLogin ? <Login /> : <Register />}
      </motion.div>
      <div>
        <button
          className={isLogin ? "auth-clicked" : "auth-button"}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={isLogin ? "auth-button" : "auth-clicked"}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>
    </motion.div>
  );
}

export default AuthContainer;
