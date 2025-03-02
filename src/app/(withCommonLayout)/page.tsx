import * as React from "react";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import Specialist from "@/components/UI/HomePage/Specialist/Specialist";
import WhyUs from "@/components/UI/HomePage/WhyUs/WhyUs";
import TopRatedDoctors from "@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors";
import HowItWorks from "@/components/UI/HomePage/HowItWorks/HowItWorks";
import Stats from "@/components/UI/HomePage/Stats/Stats";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <HowItWorks />
      <Stats />
    </>
  );
};

export default HomePage;
