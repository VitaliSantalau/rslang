import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BookScreen from '../screens/BookScreen/BookScreen';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/book" element={<BookScreen />} />
        <Route path="/login" element={<h1>login</h1>} />
      </Routes>
    </div>
  );
}

export default App;
