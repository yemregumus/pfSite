import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import MatrixRainingCode from "./components/MatrixRain";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
