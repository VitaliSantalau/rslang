import './SignIn.css';

function SignIn() {
  return (
    <form className="signIn">
      <div className="form-titlte-container">
        <p className="form-title">Sign in</p>
        <p className="form-desc">
          Log in using e-mail and password provided during registration
        </p>
      </div>
      <label htmlFor="signIn-email" className="label">
        <p>Email</p>
        <input
          type="text"
          id="signIn-email"
          name="email"
          placeholder="Your working email"
        />
      </label>
      <label htmlFor="signIn-password" className="label">
        <p>Password</p>
        <input
          type="text"
          id="signIn-password"
          name="password"
          placeholder="Your password"
        />
      </label>
      <button type="submit" className="form-button">Sign in</button>
      <div className="sigIn-registration">
        <p>Do not have a registration?</p>
        <button
          className="registration-link"
        >
          registration
        </button>
      </div>
    </form>
  );
}

export default SignIn;
