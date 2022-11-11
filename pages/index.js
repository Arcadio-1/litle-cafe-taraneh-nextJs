import Head from "next/head";
import BestOfer from "../Components/bestOfer/BestOfer";
import Hero from "../Components/hero/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cafe Taraneh</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Cafe Taraneh is best Website Ever" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Hero />
      <BestOfer />
    </div>
  );
}
