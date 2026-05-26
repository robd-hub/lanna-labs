import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import LogoBar from "@/components/LogoBar";
import About from "@/components/About";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHero />
      <LogoBar />
      <About />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
