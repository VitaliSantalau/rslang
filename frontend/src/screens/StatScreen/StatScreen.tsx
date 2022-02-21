import './StatScreen.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../app/store';
import { selectToken } from '../../auth/authSlice';

import Footer from '../../components/footer/Footer';

function StatScreen() {
  const token = useAppSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/auth');
  }, [navigate, token]);

  return (
    <>
      <main className="main statistics">
        <div className="container">
          <h2 className="statistics-title">Statistics</h2>
          <div className="statistics-container">
            <div className="statistics-games">
              <h3>Games</h3>
              <div className="statistics-audiochallenge">
                <h4>Audio Challenge</h4>
              </div>
              <div className="statistics-sprint">
                <h4>Sprint</h4>
              </div>
            </div>
            <div className="statistics-words">
              <h3>Words</h3>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default StatScreen;
