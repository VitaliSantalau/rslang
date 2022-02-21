import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import BookScreen from '../screens/BookScreen/BookScreen';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import GamesScreen from '../screens/GamesScreen/GamesScreen';
import StatScreen from '../screens/StatScreen/StatScreen';
import AboutScreen from '../screens/AboutScreen/AboutScreen';
import Header from '../components/header/Header';
import AudioChallenge from '../games/audioChallenge/AudioChallenge';
import Sprint from '../games/sprint/Sprint';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/book" element={<BookScreen />} />
        <Route path="/games" element={<GamesScreen />} />
        <Route path="/games/audiochallenge" element={<AudioChallenge />} />
        <Route path="/games/sprint" element={<Sprint />} />
        <Route path="/stat" element={<StatScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </div>
  );
}

export default App;
