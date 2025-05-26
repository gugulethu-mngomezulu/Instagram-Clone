import React, { useState } from "react";
import "./authModal.css";

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        {/* Instagram Picture */}
        <div className="instagram-image-container" style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src="https://instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png"
            alt="Instagram"
            style={{ width: "100px", borderRadius: "50%" }}
          />
        </div>

        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form>
          <input type="email" placeholder="Email" required /><br />
          <input type="password" placeholder="Password" required /><br />
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <p className="switchLink">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
        <button className="closeBtn" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default AuthModal;
