import './App.css';
import Clock from './components/Clock';
import React, {useEffect, useState} from "react";

function App() {
    const [imageID, setImageID] = useState(Math.floor(Math.random() * 18) + 1);

    useEffect(() => {
        document
            .getElementById('app')
            .style.backgroundImage = `url("images/background/background${imageID}.jpg")`;
    })

    return (
      <>
          <div id="app">
              <Clock />

              <div className="container">

              </div>
          </div>
      </>
);
}

export default App;
