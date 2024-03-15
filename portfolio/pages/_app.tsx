import { AppContext, AppInitialProps, AppProps } from "next/app";
import Layout from "../component/Layout";
import "../global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
