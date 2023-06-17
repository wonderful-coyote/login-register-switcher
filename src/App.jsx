import React, { useState } from 'react';
import "./App.css";
import { SignIn } from "./Components/Login";
import { Register } from "./Components/Register";

function App() {

  const [currentForm, setCurrentForm] = useState("login");

  const toogleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      
      {currentForm === "login" ? <SignIn onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm} />}

    </div>
  );
}

export default App;
