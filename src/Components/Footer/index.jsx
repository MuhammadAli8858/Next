import { Container, Content, Data, Global, Icons, Lin, Title } from "./style";

export const Footer = () => {
  return (
    <Global>
      <Container>
        <Title>
          <Content>
            <Content.Title>Hujjatlar</Content.Title>
            <Content.Item>Umumiy shartlar</Content.Item>
            <Content.Item>Ofertalar arxivi</Content.Item>
            <Content.Item>Nizom</Content.Item>
            <Content.Item>Guvohnoma</Content.Item>
          </Content>
          <Content>
            <Content.Title>Servis</Content.Title>
            <Content.Item>Do’konlar</Content.Item>
            <Content.Item>Biz haqimizda</Content.Item>
            <Content.Item>Hamkorlik uchun</Content.Item>
            <Content.Item>Qaytarish</Content.Item>
            <Content.Item>Promokodlar</Content.Item>
          </Content>
          <Content>
            <Content.Title>Mahsulotlar katalogi</Content.Title>
            <Content.Item>Katalog 1</Content.Item>
            <Content.Item>Katalog 1</Content.Item>
            <Content.Item>Katalog 2</Content.Item>
            <Content.Item>Katalog 2</Content.Item>
            <Content.Item>Katalog 3</Content.Item>
            <Content.Item>Katalog 3</Content.Item>
          </Content>
        </Title>
        <Content>
          <Content.Title>Axbarot xizmati</Content.Title>
          <Content.Item>contact.@nextstore.uz</Content.Item>
          <Content.Item>
            +998 97 712 96 96
            <br />
            +998 95 503 09 09
          </Content.Item>
          <Content.Item>
            Sag’bon 186, Olmazor tumani, Toshkent, O'zbekiston
          </Content.Item>
          <Content.Item>
            <Icons.Facebook />
            <Icons.Instagram />
            <Icons.Telegram />
            <Icons.Tiktok />
          </Content.Item>
        </Content>
      </Container>
      <Lin />
      <Data>
        <div>2022 Nextstore.com</div>
        <div style={{ marginRight: "150px" }}>Powered by </div>
      </Data>
    </Global>
  );
};

export default Footer;
