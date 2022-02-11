import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectToken } from '../../auth/authSlice';
import './PromptSection.css';

function PromptSection() {
  const token = useSelector(selectToken);

  return (
    <section className="prompt-section">
      <div className="container">
        <div className="prompt">
          <div className="prompt-text-container">
            <p>Explore all the possibilities of RS Lang</p>
            {
              !token && (
                <NavLink to="/auth" className="prompt-link">
                  Log In
                </NavLink>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromptSection;
