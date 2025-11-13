import './App.css'
import Alerts from './components/Alerts';
import About from './components/About'
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleSwitch = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert('Dark mode is enabled', 'success');

      const originalTitle = document.title;
      document.title = "TextUtils - Dark Mode";
      setTimeout(() => {
        document.title = originalTitle;
      }, 3000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is enabled', 'success');

      const originalTitle = document.title;
      document.title = "TextUtils - Light Mode";
      setTimeout(() => {
        document.title = originalTitle;
      }, 3000);
    }
  }

  return (
    <Router>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} togleStyle={toggleSwitch} />
      <Alerts alert={alert} />

      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForms showAlert={showAlert} heading="Enter your text to analyze" buttonName="Convert to Upper Case" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
