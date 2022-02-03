import { NavLink } from 'react-router-dom';
import './StartSection.css';

function StartSection() {
  return (
    <section className="start-section">
      <div className="container">
        <div className="intro">
          <p className="intro-text">
            Enjoy studying with RS Lang
          </p>
          <div>
            <NavLink
              to="/about"
              className="intro-link-about"
            >
              about us
            </NavLink>
            <NavLink
              to="/project"
              className="intro-link-prolect"
            >
              about project
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StartSection;
