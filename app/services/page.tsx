import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import LogoBar from "@/components/LogoBar";
import ServicesDetail from "@/components/ServicesDetail";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <LogoBar />
      <ServicesDetail />
      <CTA />
      <Footer />
    </main>
  );
}
