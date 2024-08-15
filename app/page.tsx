import Navbar from "./components/homepage/navbar";
import Hero from "./components/homepage/hero";
import Collection from "./components/homepage/collection";
import BestSelling from "./components/homepage/bestselling";
import InfoSection from "./components/homepage/about";
import Newsletter from "./components/homepage/newsletter";

export default function App() {
  return (
    <>
      <div className="bg-[url('/hero-background.png')] bg-center bg-no-repeat bg-cover z-10 lg:h-[600px] relative">
        <div className="absolute inset-0 -z-10 bg-black opacity-30"></div>
        <Navbar />
        <Hero />
      </div>
      <Collection />
      <BestSelling />
      <InfoSection />
      <Newsletter />
    </>
  );
}
