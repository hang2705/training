import './App.css';
import React, { useState } from "react";
import LoginPage from './pages/Login';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);


  return (
    <div >
      <LoginPage />

    </div>
  );
}

export default App;
