import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BookScreen from '../screens/BookScreen/BookScreen';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import GamesScreen from '../screens/GamesScreen/GamesScreen';
import StatScreen from '../screens/StatScreen/StatScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import Header from '../components/header/Header';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/book" element={<BookScreen />} />
        <Route path="/games" element={<GamesScreen />} />
        <Route path="/stat" element={<StatScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
      <Header />
    </div>
  );
}

export default App;
