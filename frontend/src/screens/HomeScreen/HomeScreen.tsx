import './HomeScreen.css';
import Footer from '../../components/footer/Footer';
import StartSection from '../../sections/startSection/StartSection';
import DescSection from '../../sections/descSection/DescSection';
import TeamSection from '../../sections/teamSection/TeamSection';

function HomeScreen() {
  return (
    <>
      <main className="main homescreen">
        <StartSection />
        <DescSection />
        <TeamSection />
        <section className="prompt-section">
          <div className="container">
            <h1>prompt</h1>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomeScreen;
