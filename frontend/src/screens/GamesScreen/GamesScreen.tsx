import './GamesScreen.css';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

function GamesScreen() {
  return (
    <>
      <main className="main gamescreen">
        <div className="container">
          <h2 className="gamescreen-title">Games</h2>
          <div className="game-links">
            <NavLink
              to="/games/audiochallenge"
              className="game-link audioChallenge"
            >
              Audio Challenge
            </NavLink>
            <NavLink
              to="/games/sprint"
              className="game-link sprint"
            >
              Sprint
            </NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GamesScreen;
