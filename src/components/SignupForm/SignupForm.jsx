import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <>
      <div class="register-form">
        <h2>Register</h2>
        <p>Register to start managing your assignments</p>
      </div>
      <form class="register-form">
        <div class="form-group">
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            name="nickname"
            class="form-control"
            placeholder="Nickname"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <p class="form-text">
          By registering, you accept the Terms. Please read our Privacy Policy
          to learn how we collect, use and share your information. Please also
          review our Cookie Policy to learn how we use cookies and similar
          technologies.
        </p>
        <button class="btn btn-primary">Register</button>
      </form>
      <div class="register-form">
        <p>Already have an account?</p>
        <Link class="login-link" href="/login">
          Log In
        </Link>
      </div>
    </>
  );
};

export default RegisterForm;
