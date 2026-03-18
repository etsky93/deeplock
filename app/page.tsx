import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyDeepLock from "./components/WhyDeepLock";
import ForWho from "./components/ForWho";
import Security from "./components/Security";
import FAQ from "./components/FAQ";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0a0a" }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyDeepLock />
      <ForWho />
      <Security />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
