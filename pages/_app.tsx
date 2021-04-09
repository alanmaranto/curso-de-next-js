import Layout from "components/Layout/Layout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // providers -- Context, theme, language, data
  // Layout
  // aditional props

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
