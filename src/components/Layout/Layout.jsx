import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Container from './Container/Container';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Container content={<Outlet />} />
      <Footer />
    </>
  );
};

export default Layout;
