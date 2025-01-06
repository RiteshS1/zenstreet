import { useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import WhyZenStreet from "@/components/WhyZenStreet";
import Contact from "@/components/Contact";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      <div className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        <Navbar />
        <Hero />
        <AboutUs />
        <Features />
        <WhyZenStreet />
        <Contact />
      </div>
    </div>
  );
};

export default Index;