import "../styles/globals.css";
import type { AppProps } from "next/app";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import head from "next/head";
import '../styles/bootstrap.css'
import '../config'
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
