import './App.css';
import LeftSide from './Component/LeftSide';
import MiddleSide from './Component/MiddleSide';
import RightSide from './Component/rightSide';
import { useState } from 'react';
import { auth, provider } from "./firebase";
import LoginForm from '../src/firebase/LoginForm'; // Make sure this exists

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} />}

      <div className="leftSideHome">
        <LeftSide />
      </div>

      <div className="middleSide">
        <MiddleSide />
      </div>

      <div className="rightSide">
        <RightSide onLoginClick={() => setShowLogin(true)} />
      </div>
    </div>
  );
}

export default App;
