import styled from "styled-components";
import { ReactComponent as Aloqa } from "../../assets/icons/Aloqa.svg";
import { ReactComponent as next } from "../../assets/icons/Logotip.svg";
import { ReactComponent as poisk } from "../../assets/icons/Poisk.svg";
import { ReactComponent as katalog } from "../../assets/icons/Katalog.svg";
import { ReactComponent as like } from "../../assets/icons/Like.svg";
import { ReactComponent as korzina } from "../../assets/icons/Korzina.svg";

export const Container = styled.div`
  background-color: white;

  width: 1600px;
  width: 100%;
  height: 100px;

  /* background: #FFFFFF; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: var(--padding);
  background-color: white;
`;

Content.Aloqa = styled.div`
  display: flex;
  gap: 224px;
  margin-right: 126px;
  justify-content: end;
  background-color: white;

  .aloqa {
    cursor: pointer;
    :hover {
      color: #0d63f3;
    }
    :active {
      opacity: 0.9;
    }
  }
`;

export const Icons = styled.div``;
export const Inputt = styled.div`
  display: flex;
`;

Icons.Aloq = styled(Aloqa)`
  width: 15px;
  height: 12px;
  & path {
    fill: #000000;
  }
`;

Icons.Next = styled(next)`
  width: 91px;
  height: 46px;
`;

Icons.Poisk = styled(poisk)``;

Icons.Katalog = styled(katalog)``;

Icons.Like = styled(like)``;

Icons.Korzina = styled(korzina)``;
