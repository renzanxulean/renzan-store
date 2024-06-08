/* eslint-disable react/prop-types */
// src/layouts/Layout.js

import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="mt-16 flex-grow">
        <main className="pt-20 pb-20">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
