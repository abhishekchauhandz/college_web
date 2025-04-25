import CollegeInfo from "./CollegeInfo";
import Gallery from "./Gallary";
import Ratings from "./Ratings";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row w-full h-auto py-4 gap-4">
      <CollegeInfo />
      <div className="lg:w-1/2 w-full flex flex-col gap-4">
        <Gallery />
        <Ratings />
      </div>
    </section>
  );
}