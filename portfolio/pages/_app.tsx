import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Layout from "../component/Layout";
import { colors } from "../constant";
import "../global.scss";

const title = "조민준의 포트폴리오";
const description = "카이스트 16학번 조민준의 포트폴리오입니다.";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content={colors.navy} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content="/work.jpg" />
      <DefaultSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: "website",
          images: [{ url: "/work.jpg" }],
        }}
      />
      <Component {...pageProps} />
    </Layout>
  );
}
