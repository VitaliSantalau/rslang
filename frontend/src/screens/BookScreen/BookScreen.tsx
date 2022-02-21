import './BookScreen.css';
import Footer from '../../components/footer/Footer';
import Book from '../../components/book/Book';

function BookScreen() {
  return (
    <>
      <main className="main bookscreen">
        <div className="container">
          <Book />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BookScreen;
