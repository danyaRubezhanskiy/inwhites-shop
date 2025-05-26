import React from "react";
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Main/HeroSection/Hero.jsx";
import BlackSection from "../../components/Main/BlackSection/BlackSection.jsx";
import NewArrivals from "../../components/Main/NewArrivals/NewArrivals.jsx";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <BlackSection></BlackSection>
      <NewArrivals></NewArrivals>
    </div>
  );
};

export default HomePage;
