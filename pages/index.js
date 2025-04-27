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
        <title>দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ | ইসলামিক সেবামূলক সংগঠন</title>
        <meta name="description" content="দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ - একটি অরাজনৈতিক, অলাভজনক ও ইসলামী স্বেচ্ছাসেবী সংগঠন, যা আহলুস সুন্নাহ ওয়াল জামাআহ মতাদর্শে বিশ্বাসী" />
        <meta name="keywords" content="ইসলামিক সংগঠন, দাওয়াহ, গোবিন্দগঞ্জ, ইসলামিক কমিউনিটি, মুসলিম সেবা" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content="দাওয়াহ কমিউনিটি গোবিন্দগঞ্জ" />
        <meta property="og:description" content="একটি অরাজনৈতিক, অলাভজনক ও ইসলামী স্বেচ্ছাসেবী সংগঠন" />
        <meta property="og:image" content="/logo.png" />
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
