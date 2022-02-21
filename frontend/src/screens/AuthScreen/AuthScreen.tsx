import './AuthScreen.css';
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import LogIn from '../../components/forms/Login';
import Register from '../../components/forms/Register';

function AuthScreen() {
  const [form, setForm] = useState('Log in');

  return (
    <>
      <main className="main authscreen">
        <div className="container">
          {
            form === 'Log in'
              ? <LogIn setForm={setForm} />
              : <Register setForm={setForm} />
          }
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AuthScreen;
