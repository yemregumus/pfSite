import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import MatrixRainingCode from "./components/MatrixRain";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Yunus Emre Gumus</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
