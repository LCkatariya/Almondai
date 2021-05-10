import React from 'react';
import Header from '../Ui/Header/Header';
import Sections from '../Sections/Sections';
import Footer from '../Ui/Footer/Footer';


const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Sections />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
