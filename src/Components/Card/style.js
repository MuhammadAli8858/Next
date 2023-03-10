import styled from "styled-components";
import { ReactComponent as korzina } from "../../assets/icons/korzinkaCard.svg";
import { ReactComponent as like } from "../../assets/icons/LikeCard.svg";

export const Container = styled.div`
  padding: var(--padding);
  margin-top: 40px;
`;

export const Content = styled.div`
  width: 230px;
  height: 390px;
  margin-top: 20px;
  border: 1px solid black;
  background: #ffff;
  border-radius: 10px;
`;
export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

Content.Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 15px;
`;

export const Info = styled.div`
  display: flex;
  /* justify-content: space-around; */
  width: 76px;
  height: 29px;
  /* text-align: center; */
  background: #eb8528;
  border-radius: 5px;
  padding: 5px 10px;
  /* margin: 20px 15px 30px 20px; */
`;

Content.Imgg = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
Content.Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  gap: 23px;
  .quantity {
    font-family: "Nuckle";
    font-style: normal;
    font-weight: 539;
    font-size: 14px;
    line-height: 17px;
    color: #6c757d;
  }
`;

Content.H2 = styled.h2`
  font-family: "Nuckle";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-left: 10px;
  color: #0d63f3;
`;

export const Img = styled.img`
  margin-left: 10px;
  width: 180px;
  height: 180px;
`;

export const Icons = styled.div``;

Icons.Like = styled(like)`
  cursor: pointer;

  :hover {
    color: #0d63f3;
    & path {
      fill: #000000;
    }
  }
  :active {
    opacity: 0.5;
  }
`;
Icons.Korzina = styled(korzina)`
  cursor: pointer;
  :hover {
    color: #0d63f3;
    & path {
      fill: #000000;
    }
  }
  :active {
    opacity: 0.5;
  }
`;
