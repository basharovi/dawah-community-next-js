import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import Team from "../components/Team";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</title>
        <meta name="description" content="দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Team />
        <Projects />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
