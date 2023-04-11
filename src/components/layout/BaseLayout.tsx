import React from "react";

import Header from "./header/Header";
import Footer from "./footer/Footer";

type Props = {
  children: React.ReactNode;
};

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
