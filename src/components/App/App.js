import React from 'react';
import Game from '../Game';
import Header from '../Header';
import GameHandlerProvider from '../GameHandlerProvider';

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <GameHandlerProvider>
          <Game />
        </GameHandlerProvider>
      </div>
    </div>
  );
}

export default App;
