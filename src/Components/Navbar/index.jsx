import React from "react";
import Button from "../Generic/Button";
import Input from "../Generic/Input";
import LangSelect from "../Language";

import { Container, Content, Icons, Inputt } from "./style";

const Navbar = () => {
  return (
    <Container>
      <Content.Aloqa>
        <div className="aloqa">
          <Icons.Aloq />
          Aloqa uchun
        </div>
        <LangSelect />
      </Content.Aloqa>
      <Content>
        <Content.Next>
          <Icons.Next />
        </Content.Next>
        <Button type="dark">{<Icons.Katalog />}KATALOG</Button>
        <Inputt>
          <Input width={"396"} placeholder={"Maxsulotlarni izlash"} />
          <Button type="primary">
            <Icons.Poisk />
          </Button>
        </Inputt>
        <Button>{<Icons.Like />}</Button>
        <Button>{<Icons.Korzina />}</Button>
        <Button type="light">Kirish</Button>
      </Content>
    </Container>
  );
};

export default Navbar;
