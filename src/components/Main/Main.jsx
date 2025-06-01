import React from "react";
import Hero from "./HeroSection/Hero";
import BlackSection from "./BlackSection/BlackSection";
import NewArrivals from "./NewArrivals/NewArrivals";
import TopSelling from "./TopSelling/TopSelling";
import BrowseByDressStyle from "./BrowseByDressStyle/BrowseByDressStyle";
import Reviews from "./Reviews/Reviews";

const Main = () => {
  return (
    <main>
      <Hero></Hero>
      <BlackSection></BlackSection>
      <NewArrivals></NewArrivals>
      <TopSelling></TopSelling>
      <BrowseByDressStyle></BrowseByDressStyle>
      <Reviews></Reviews>
    </main>
  );
};

export default Main;
