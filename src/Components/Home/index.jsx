import React from "react";
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
      <h1>test</h1>
    </Global>
  );
};

export default Home;
