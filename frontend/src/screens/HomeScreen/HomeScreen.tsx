import './HomeScreen.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

function HomeScreen() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <h1>home screen</h1>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomeScreen;
