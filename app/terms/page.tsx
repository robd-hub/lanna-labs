import Navbar from "@/components/Navbar";
import TermsHero from "@/components/TermsHero";
import LogoBar from "@/components/LogoBar";
import TermsContent from "@/components/TermsContent";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <TermsHero />
      <LogoBar />
      <TermsContent />
      <CTA />
      <Footer />
    </main>
  );
}
