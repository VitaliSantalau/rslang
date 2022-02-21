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
              <div className="stackoverflow team-block">
                <p>some guy from stackoverflow.com</p>
              </div>
              <div className="santalau team-block">
                <p>Santalau Vitali</p>
                <p>v.santalau@gmail.com</p>
              </div>
              <div className="tutotial team-block">
                <p>some guy who wrote clear tutorials</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AboutScreen;
