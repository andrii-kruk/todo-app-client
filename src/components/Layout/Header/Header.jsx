import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header class="main-header">
      <nav>
        <ul class="nav-list">
          <li class="nav-item">
            <NavLink to="/" class="nav-link">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="todos" class="nav-link">
              Todos
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="about" class="nav-link">
              About
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="profile" class="nav-link">
              Profile
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="login" class="nav-link">
              Sign In
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="register" class="nav-link">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
