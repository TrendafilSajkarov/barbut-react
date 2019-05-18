import React from 'react';
import './App.css';
// import CoinFLip from './coinflip/CoinFlip'
import Rolldice from './barbut/Rolldice';
// import Lottery from './loto/Lottery';

function App() {
  return (
    <div className="App">
      {/* <CoinFLip /> */}
      {/* <Lottery />
      <Lottery title="Mini Daily" numBalls={4} maxNum={10}/> */}
      <Rolldice />
    </div>
  );
}

export default App;
