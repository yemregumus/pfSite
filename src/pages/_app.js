import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
