import Breadcrumb from "@/_component/breadcrumb/Breadcrumb";
import IITHeader from "@/_component/header/IITHeader";
import StickyTabNav from "@/_component/header/StickyTabNav";
import HeroSection from "@/_component/heroSection/HeroSection";


export default function Home() {
  return (
    <main className="md:px-14 px-4 max-w-[1700px] mx-auto">
      <Breadcrumb />
      <IITHeader />
      <StickyTabNav />
      <HeroSection />
    </main>
  );
}
