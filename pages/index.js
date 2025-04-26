import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Mission from "../components/Mission";
import Team from "../components/Team";
import Projects from "../components/Projects";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ</title>
        <meta name="description" content="দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Team />
        <Projects />
        <Gallery />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
