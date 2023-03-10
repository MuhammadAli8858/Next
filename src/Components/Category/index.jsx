import React from "react";
import { Container, Content, Img } from "./style";
import phone from "../../assets/img/phone.png";
import noutbook from "../../assets/img/noutbook.png";
import tv from "../../assets/img/tv.png";
import wach from "../../assets/img/wach.png";
import ayrPorts from "../../assets/img/ayrPorts.png";
import kanditioner from "../../assets/img/kanditioner.png";
import holodilin from "../../assets/img/holodilin.png";
import steralka from "../../assets/img/steralka.png";
import Button from "../Generic/Button";

const Category = () => {
  return (
    <Container>
      <h1>Kategoriyalar</h1>
      <Content>
        <Content.Card>
          <Img src={phone} />
          Smartfonlar
        </Content.Card>
        <Content.Card>
          <Img src={noutbook} />
          Kompyuterlar va notebooklar
        </Content.Card>{" "}
        <Content.Card>
          <Img src={tv} />
          Televizorlar
        </Content.Card>{" "}
        <Content.Card>
          <Img src={wach} />
          Aqlli soatlar
        </Content.Card>{" "}
        <Content.Card>
          <Img src={ayrPorts} />
          Quloqchinlar
        </Content.Card>
        <Content.Card>
          <Img src={kanditioner} />
          Konditsioner
        </Content.Card>{" "}
        <Content.Card>
          <Img src={holodilin} />
          Sovutkichlar
        </Content.Card>{" "}
        <Content.Card>
          <Img src={steralka} />
          Kir yuvish mashinalari
        </Content.Card>
      </Content>
      <Button mt={"12"}>
        <h2>Batafsil</h2>
      </Button>
    </Container>
  );
};

export default Category;
