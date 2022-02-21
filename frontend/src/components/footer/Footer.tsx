/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="year-github">
          <p className="year">2021,</p>
          <a
            className="github"
            href="https://github.com/vitalisantalau"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vitali Santalau
          </a>
        </div>
        <a
          className="rsshool"
          href="https://rs.school/js/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </footer>
  );
}

export default Footer;
