
import ProfilePage from './Pages/ProfilePage';
import Home from './Pages/Home';
import Question from './Pages/Question';
import Chat from './Pages/Chat'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path='/question' element={<Question />} />
      </Routes>
    </>
  );
}

export default App;
