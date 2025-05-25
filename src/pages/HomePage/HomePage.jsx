import React from "react";
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Main/HeroSection/Hero.jsx";
import BlackSection from "../../components/Main/BlackSection/BlackSection.jsx";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <BlackSection></BlackSection>
    </div>
  );
};

export default HomePage;
