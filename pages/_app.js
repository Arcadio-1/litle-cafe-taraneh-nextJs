import { Fragment } from "react";
import Footer from "../Components/layout/footer/footer";
import Header from "../Components/layout/header/header";
import ShopingStoreProvider from "../Store/ShopingStore";
import "../styles/Main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ShopingStoreProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ShopingStoreProvider>
  );
}

export default MyApp;
