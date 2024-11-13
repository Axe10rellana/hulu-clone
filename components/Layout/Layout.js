//react
import React from "react";

//next
import Head from "next/head";

//components
import Header from "../Header/Header";
import Nav from "../Nav/Nav";

const Layout = ({ title, children, description }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1ee984" />
        <meta name="description" content={description} />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="favicon" href="/icons/favicon.png" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <title>{title}</title>
      </Head>
      <Header />
      <Nav />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};
export default Layout;
