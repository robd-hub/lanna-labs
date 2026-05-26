import Navbar from "@/components/Navbar";
import PrivacyHero from "@/components/PrivacyHero";
import LogoBar from "@/components/LogoBar";
import PrivacyContent from "@/components/PrivacyContent";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <PrivacyHero />
      <LogoBar />
      <PrivacyContent />
      <CTA />
      <Footer />
    </main>
  );
}
