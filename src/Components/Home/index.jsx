import React from "react";
import Card from "../Card";
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
      <Card />
      <h1>test</h1>
    </Global>
  );
};

export default Home;
