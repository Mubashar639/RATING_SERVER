import React from 'react';
import Header from './header/Header';
import BeSmart from "./besmart/besmart";
import LabdorWork from "./LabdoorWork/LabdorWork";
import ReadyToShop from './ReadyToShop/ReadyToShop';
import MessageBox from "./messagebox/messageBox"

function Home() {
  return (
    <div>
      <Header />
      <BeSmart />
      <MessageBox />
      <LabdorWork />
      <ReadyToShop />
  
    </div>
  );
}

export default Home;
