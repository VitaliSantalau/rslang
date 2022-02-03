import './AboutScreen.css';
import Footer from '../../components/footer/Footer';

function AboutScreen() {
  return (
    <>
      <main className="main about">
        <div className="container">
          <div className="team">
            <h2 className="team-title">Meet our team</h2>
            <div className="team-block-container">
              <div className="team-block" />
              <div className="team-block" />
              <div className="team-block" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AboutScreen;
