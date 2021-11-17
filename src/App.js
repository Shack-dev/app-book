import { Route, Routes } from 'react-router';
import TicTacToe from './public/component/tictactoe.js';
import HomePage from './public/homePage/homepage.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/TicTacToe" element={<TicTacToe/>} />
      </Routes>
    </div>
  );
}

export default App;
