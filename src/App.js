
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){
  const [mode, setmode] = useState('light');
  const [btntext, setbtntext] = useState('Enable dark mode');
  const [alert, setalert] = useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);

  }
 
    
    
  const togglemode=()=>{
    if(mode==='light'){
      setmode('dark');
      setbtntext('Enable light mode');
    document.body.style.backgroundColor='#1a232b';
    document.title = 'TextUtils-Dark Mode';
    showalert("Dark mode has been enabled!","success");
      
    }
    
    else{ 
     setmode('light');
     setbtntext('Enable dark mode');
     document.body.style.backgroundColor='white';
     showalert("Light mode has been enabled!","success");
     document.title= 'TextUtils-Light Mode';
   
    }
  }
  

  return (
 <>
    <Router>
      <Navbar title="TextUtils" mode={mode} clickbtn={togglemode} btntext={btntext} />
      <Alert alert={alert} />
      <div className="container my-3">
         <Routes>
          <Route exact path="/About" element={<About />} /> 
             <Route exact path="/" element={< TextForm  showalert={showalert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces and many more..." mode={mode} />   } />
           </Routes>
      </div>
       </Router>
 </>  
  );
}
export default App;
