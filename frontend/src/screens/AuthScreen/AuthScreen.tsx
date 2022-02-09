import './AuthScreen.css';
// import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import SignIn from '../../components/forms/signIn/SignIn';

function AuthScreen() {
  // const [state, setState] = useState('signIn');
  return (
    <>
      <main className="main authscreen">
        <div className="container">
          <SignIn />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AuthScreen;
