import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Preview from './components/Preview';

function App() {

  const [text,setText] = useState('');
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='black';

      showAlert("Dark mode enable","warning");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode enable","warning");


    }
  }
  return (
    <div className="backGround">
    <Router>
    <Navbar  Heading ="" mode={mode} toggleMode={toggleMode} />
    <div className = "App fs-5 p-2 my-2 bg-light">
    Welcome to the Text Analizer
    </div>
    <Alert Alerts={alert}/>
    
   <div>
    <Switch>
          <Route path="/about">
          <About/>
          </Route>
          <Route path="/">
            <div className="d-flex leftAside justify-content-around ">
              <div className="textBox">
          <TextBox mode={mode} text = {text} setText = {setText}/>
          </div>
          <div className="rightAside bg-light">
          <Preview text = {text}/>
          </div>
          </div>
          <div className="footer">
          <About />
          </div>
          </Route>
        </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
