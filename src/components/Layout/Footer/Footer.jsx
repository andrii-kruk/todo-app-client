import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<footer class="main-footer">
  <Link to="/" className="logo">TODO</Link>
  <ul class="footer-nav">
    <li class="footer-item">
      <Link to="/" class="footer-link">Home</Link>
    </li>
    <li class="footer-item">
      <Link to="todos" class="footer-link">Todos</Link>
    </li>
    <li class="footer-item">
      <Link to="about" class="footer-link">About</Link>
    </li>
    <li class="footer-item">
      <Link to="profile" class="footer-link">Profile</Link>
    </li>
  </ul>
  <div class="footer-social">
    <ul class="social-links">
      <li class="social-link-item">
        <a href="https://www.linkedin.com/in/andrii-kruk/" class="social-link">LinkedIn</a>
      </li>
      <li class="social-link-item">
        <a href="https://www.instagram.com/" class="social-link">Instagram</a>
      </li>
      <li class="social-link-item">
        <a href="https://pl-pl.facebook.com/" class="social-link">Facebook</a>
      </li>
    </ul>
    <ul class="contact-info">
      <li class="contact-item">
        <a href="mailto:drop3r17@gmail.com" class="contact-link">todo.app@gmail.com</a>
      </li>
      <li class="contact-item">
        <a href="tel:+48731747052" class="contact-link">+48-731-747-052</a>
      </li>
    </ul>
  </div>
</footer>

  );
};

export default Footer;
