import './App.css';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    <div className="App">
      <h1 className="text-3xl font-bold underline text-green-500">
      Hello world!
      </h1>
    </div>
    </>
  );
}

export default App;
