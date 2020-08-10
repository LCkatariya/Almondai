import React, { Fragment } from 'react';
import Header from '../Ui/Header/Header';
import Sections from '../Sections/Sections';
import Footer from '../Ui/Footer/Footer';




const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Sections />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
