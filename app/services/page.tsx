import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Services",
  description: "Custom website design and build for small and medium businesses. Fixed price, four-week delivery, one point of contact.",
};
import ServicesHero from "@/components/ServicesHero";
import LogoBar from "@/components/LogoBar";
import ServicesDetail from "@/components/ServicesDetail";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Navbar />
      <ServicesHero />
      <LogoBar />
      <ServicesDetail />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
