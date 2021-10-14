import CartProvider from "@store/Cart";
import { AppProps } from "next/app";

import 'semantic-ui-css/semantic.min.css'
import '../global.css'

function MyApp({ Component, pageProps }: AppProps) {
  // providers -- Context, theme, language, data
  // Layout
  // aditional props

  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
