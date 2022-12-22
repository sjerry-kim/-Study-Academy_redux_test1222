import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Page/Home';
import BoardWriteForm from './Page/BoardWriteForm';
import BoardPage from './Page/BoardPage';
import Board from './Page/Board';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/board' element={<Board />}></Route>
        <Route path='/board/:id' element={<BoardPage />}></Route>
        <Route path='/board/modifyform' element={<BoardWriteForm />}></Route>
      </Routes>

    </div>
  );
}

export default App;
