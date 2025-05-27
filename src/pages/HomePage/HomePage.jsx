import React from "react";
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Main/HeroSection/Hero.jsx";
import BlackSection from "../../components/Main/BlackSection/BlackSection.jsx";
import NewArrivals from "../../components/Main/NewArrivals/NewArrivals.jsx";
import TopSelling from "../../components/Main/TopSelling/TopSelling.jsx";
import BrowseByDressStyle from "../../components/Main/BrowseByDressStyle/BrowseByDressStyle.jsx";

const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <BlackSection></BlackSection>
      <NewArrivals></NewArrivals>
      <TopSelling></TopSelling>
      <BrowseByDressStyle></BrowseByDressStyle>
    </div>
  );
};

export default HomePage;
