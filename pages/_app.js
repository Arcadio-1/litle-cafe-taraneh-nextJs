import { Fragment } from "react";
import Footer from "../Components/layout/footer/footer";
import Header from "../Components/layout/header/header";
import ShopingStoreProvider from "../Store/ShopingStore";
import "../styles/Main.scss";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <ShopingStoreProvider seesion={pageProps.session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ShopingStoreProvider>
    </SessionProvider>
  );
}

export default MyApp;
