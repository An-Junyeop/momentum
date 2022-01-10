import "./css/App.css";
import React, {useEffect, useState} from "react";
import Store from "./Store";
import Clock from "./components/Clock";
import User from "./components/User";

function App() {
    const [imageID, setImageID] = useState(Math.floor(Math.random() * 18) + 1);
    const [storageName, setStorageName] = useState(Store.getStorageName());

    // 배경화면 랜덤 지정
    useEffect(() => {
        document
            .getElementById('app')
            .style.backgroundImage = `url("images/background/background${imageID}.jpg")`;
    });

    // 입력된 이름을 localStorage에 저장하기
    const onButtonClick = (value) => {
        Store.setStorageName(value);
        setStorageName(value);
    }

    return (
      <>
          <div id="app">
              <div className="container">
                  {storageName && <Clock />}
                  <User
                      storageName={storageName}
                      onButtonClick={onButtonClick}/>
              </div>
          </div>
      </>
);
}

export default App;
