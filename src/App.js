import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

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
      document.body.style.backgroundColor = '#970aa3';
      showAlert("Pookie mode has been enabled", "success");
    } else if (mode === 'pookie') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
      <Navbar title="Text-Analyzer" mode={mode} toggleMode={toggleMode} togglePookieMode={togglePookieMode} />
      <Alert alert={alert} />
      <div className="container my-5">
        <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
