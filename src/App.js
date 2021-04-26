import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Board from './Board.js'
import Timer from './Timer';
import BarChart from './BarChart';
import Form from './Form';
import Avatar from "./Avatar";

function App() {
  return (
    <div className="App">
      <header> Лабораторна робота 4 </header>
      <Timer />
      <div className="chessboard">
        <Board />
      </div>
      <div className="formContainer">
        <Form />
      </div>
      <div className='BarChart'>
        <BarChart />
      </div>
    </div>
  );
}

export default App;
