import React from "react";
import PlayCard from "../Card";
import GenCarousel from "../Carusel";
import Category from "../Category";
import Navbar from "../Navbar";
import { Global } from "./style";

const Home = () => {
  return (
    <Global>
      <Navbar />
      <GenCarousel />
      <Category />
      <PlayCard />
      
    </Global>
  );
};

export default Home;
