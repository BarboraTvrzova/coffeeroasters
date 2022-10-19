import Head from "next/head";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const coffeeTypes = [
  {
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
    image: "gran-espresso",
  },
  {
    name: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    image: "planalto",
  },
  {
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    image: "piccollo",
  },
  {
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    image: "danche",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Coffee Roasters</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&family=Fraunces:opsz,wght@9..144,400;9..144,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <Header />
        <LandingPage items={coffeeTypes} />
        <Footer />
      </div>
    </>
  );
}
