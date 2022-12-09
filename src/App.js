import './Styles/index.css'; 
import './Styles/santa.css'; 


import Notepad from './Components/Notepad';
import Santa from './Components/Santa';
import { useEffect } from 'react';

  


function App() {


  useEffect(() => {
    let snowfall = setInterval(() => {
      generateSnow();
    }, 60)

    return () => { clearInterval(snowfall)}
  })

  const generateSnow = () => {
    let snow = document.createElement("span");
    snow.classList.add('snow');
    snow.style.animationDuration = '3s';
    snow.style.left =  window.innerWidth * Math.random() + 'px';
    snow.style.top = '30px'; 

    document.body.appendChild(snow)
    setTimeout(() => {
      snow.remove();
    }, 5000);
  }

  return (
    <div className="container">
      <Notepad />
      <Santa />
    </div>
  );
}

export default App;
