import './HomeScreen.css';
import Footer from '../../components/footer/Footer';
import StartSection from '../../sections/startSection/StartSection';
import DescSection from '../../sections/descSection/DescSection';
import PromptSection from '../../sections/promptSection/PromptSection';

function HomeScreen() {
  return (
    <>
      <main className="main homescreen">
        <StartSection />
        <DescSection />
        <PromptSection />
      </main>
      <Footer />
    </>
  );
}

export default HomeScreen;
