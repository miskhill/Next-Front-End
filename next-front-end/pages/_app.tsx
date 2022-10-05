import Layout from '../components/Layout'
import '../styles/globals.css'
import React from "react";

interface AppProps {
    Component: React.ReactNode;
    pageProps: React.ReactNode;
}

function MyApp({ props: AppProps }) {

    const {Component, pageProps} = props;

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
