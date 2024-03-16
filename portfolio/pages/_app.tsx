import { AppProps } from "next/app";
import Layout from "../component/Layout";
import { DefaultSeo } from "next-seo";
import "../global.scss";

const title = "조민준의 포트폴리오";
const description = "카이스트 16학번 조민준의 포트폴리오입니다.";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
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
