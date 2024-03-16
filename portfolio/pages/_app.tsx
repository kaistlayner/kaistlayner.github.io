import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Layout from "../component/Layout";
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
          images: [{ url: "/images/work.jpg" }],
        }}
        additionalLinkTags={[
          {
            rel: "shortcut icon",
            href: "/images/favicon.ico",
          },
          {
            rel: "icon",
            href: "/images/favicon.ico",
          },
        ]}
        themeColor="#20354f"
      />
      <Component {...pageProps} />
    </Layout>
  );
}
