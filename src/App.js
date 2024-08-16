import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);

    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")

    }
  }

  const togglePookieMode = () => {
    if (mode === 'light') {
      setMode('pookie');
      document.body.style.backgroundColor = '#b30596';
      showAlert("Pookie mode has been enabled", "success");
    } else if (mode === 'pookie') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Text-Analyzer" mode={mode} toggleMode={toggleMode} togglePookieMode={togglePookieMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<TextForm heading="Enter Text to Analyze" showAlert={showAlert} mode={mode} />} />
          </Routes>


        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
