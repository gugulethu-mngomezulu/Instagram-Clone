import React, { useState } from "react";
import LoginForm from "../firebase/LoginForm";
import SignUpForm from "../firebase/AuthModal"; 
import './rightSide.css';

const RightSide = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // toggle between Login and Sign Up

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="rightSide">
      <div className="topProfileRightside">
        <div className="leftrightProfile">
          <div className="imageDivRightSide">
            <img
              className="imageDivRightProfile"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEn_XrZ77ZvvNuJ3JYWTfz2XZ-mRlGlSJ4Ew&s"
              alt="Profile"
            />
          </div>
          <div className="userNameBlock">
            <div className="userNameRightside">_Fundi</div>
            <div className="userFullName">Fundi Mngomezulu</div>
          </div>
        </div>
        <div className="switchBtn" onClick={() => setShowModal(true)}>
          Switch
        </div>
      </div>
      

      {/* 🔥 Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {isLogin ? <LoginForm /> : <SignUpForm />}
            <p className="form-toggle-text">
              {isLogin ? "New here?" : "Already have an account?"}{" "}
              <span onClick={toggleForm}>
                {isLogin ? "Sign Up" : "Login"}
              </span>
            </p>
            <button className="closeBtn" onClick={() => setShowModal(false)}>✕</button>
          </div>
        </div>
      )}


    </div>
  );
};

export default RightSide;
