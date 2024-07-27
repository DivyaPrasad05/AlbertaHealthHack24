import './App.css';
import CharacterSelectionComponent from './components/CharacterSelectionComponent';
import Home from './Pages/Home';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div>
        <CharacterSelectionComponent />
      </div>
    </>
  );
}

export default App;
