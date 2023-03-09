import { Carousel } from "antd";
import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img, Icons } from "./style";
import img1 from "../../assets/img/karusel 1.png";
import img2 from "../../assets/img/karusel 2.jpg";
import img3 from "../../assets/img/karusel 3.jpg";

const GenCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {};

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };
  return (
    <Container>
      <Carousel
        ref={slider}
        afterChange={onChange}
        style={{ borderRadius: "10px" }}
      >
        <Img src={img1} />
        <Img src={img2} />
        <Img src={img3} />
      </Carousel>
      <Icons.Left
        data-name="right"
        name="right"
        onClick={onMove}
        left={"true"}
      />
      <Icons.Right data-name="left" onClick={onMove} />
    </Container>
  );
};

export default GenCarousel;
