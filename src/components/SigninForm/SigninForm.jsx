import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <div class="login-form">
        <h2>Log In to Todo App</h2>
      </div>
      <div class="login-form">
        <form>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              required
            />
          </div>
          <button class="btn btn-primary">Log In</button>
          <div class="form-group">
            <a href="#">Forgot your password?</a>
          </div>
          <div class="form-group">
            <p>You still don't have an account?</p>
            <Link class="btn btn-secondary" href="/register">
              Register Now!
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
