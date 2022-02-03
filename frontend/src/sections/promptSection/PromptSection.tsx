import { NavLink } from 'react-router-dom';
import './PromptSection.css';

function PromptSection() {
  return (
    <section className="prompt-section">
      <div className="container">
        <div className="prompt">
          <div className="prompt-text-container">
            <p>Explore all the possibilities of RS Lang with</p>
            <NavLink
              to="/auth"
              className="prompt-link"
            >
              Log In
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromptSection;
