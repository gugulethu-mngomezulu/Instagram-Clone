// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in!');
      onClose();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="loginModal">
      <h3>Login</h3>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default LoginForm;
