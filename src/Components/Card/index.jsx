import React from "react";
import Button from "../Generic/Button";
import { Cards, Container, Content, Icons, Img, Info } from "./style";
import noutbook from "../../assets/img/noutbook.png";

const PlayCard = () => {
  return (
    <Container>
      <h1>Eng ko’p sotilgan</h1>
      <Cards>
        <Content>
          <Content.Info>
            <Info>Yangilik</Info>
            <Icons.Like />
          </Content.Info>
          <Content.Imgg>
            <Img src={noutbook} />
          </Content.Imgg>
          <Content.H2>299 000 so’m</Content.H2>
          <Content.Title>
            {"Apple Airpods Pro simsiz quloqchin , Oq rangda"}
            <div className="quantity">{"1230 ta buyurtma"}</div>
          </Content.Title>
          <Content.Info>
            <Button type={"card"}>Sotib olish</Button>
            <Icons.Korzina />
          </Content.Info>
        </Content>
        <Content>
          <Content.Info>
            <Info>Yangilik</Info>
            <Icons.Like />
          </Content.Info>
          <Content.Imgg>
            <Img src={noutbook} />
          </Content.Imgg>
          <Content.H2>299 000 so’m</Content.H2>
          <Content.Title>
            {"Apple Airpods Pro simsiz quloqchin , Oq rangda"}
            <div className="quantity">{"1230 ta buyurtma"}</div>
          </Content.Title>
          <Content.Info>
            <Button type={"card"}>Sotib olish</Button>
            <Icons.Korzina />
          </Content.Info>
        </Content>{" "}
        <Content>
          <Content.Info>
            <Info>Yangilik</Info>
            <Icons.Like />
          </Content.Info>
          <Content.Imgg>
            <Img src={noutbook} />
          </Content.Imgg>
          <Content.H2>299 000 so’m</Content.H2>
          <Content.Title>
            {"Apple Airpods Pro simsiz quloqchin , Oq rangda"}
            <div className="quantity">{"1230 ta buyurtma"}</div>
          </Content.Title>
          <Content.Info>
            <Button type={"card"}>Sotib olish</Button>
            <Icons.Korzina />
          </Content.Info>
        </Content>{" "}
        <Content>
          <Content.Info>
            <Info>Yangilik</Info>
            <Icons.Like />
          </Content.Info>
          <Content.Imgg>
            <Img src={noutbook} />
          </Content.Imgg>
          <Content.H2>299 000 so’m</Content.H2>
          <Content.Title>
            {"Apple Airpods Pro simsiz quloqchin , Oq rangda"}
            <div className="quantity">{"1230 ta buyurtma"}</div>
          </Content.Title>
          <Content.Info>
            <Button type={"card"}>Sotib olish</Button>
            <Icons.Korzina />
          </Content.Info>
        </Content>{" "}
        <Content>
          <Content.Info>
            <Info>Yangilik</Info>
            <Icons.Like />
          </Content.Info>
          <Content.Imgg>
            <Img src={noutbook} />
          </Content.Imgg>
          <Content.H2>299 000 so’m</Content.H2>
          <Content.Title>
            {"Apple Airpods Pro simsiz quloqchin , Oq rangda"}
            <div className="quantity">{"1230 ta buyurtma"}</div>
          </Content.Title>
          <Content.Info>
            <Button type={"card"}>Sotib olish</Button>
            <Icons.Korzina />
          </Content.Info>
        </Content>{" "}
      </Cards>
    </Container>
  );
};

export default PlayCard;
