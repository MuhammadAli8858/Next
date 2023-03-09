import React from "react";
import GenCarousel from "../Carusel";
import Navbar from "../Navbar";
import { Global } from "./style";

const Home = () => {
  return (
    <Global>
      <Navbar />
      <GenCarousel />
      <h1>test</h1>
    </Global>
  );
};

export default Home;
