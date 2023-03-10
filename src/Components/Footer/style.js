import styled from "styled-components";
import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as tiktok } from "../../assets/icons/tiktok.svg";

export const Global = styled.div`
  background: linear-gradient(
    270deg,
    rgba(77, 94, 246, 0.2) 0%,
    rgba(246, 77, 77, 0.2) 100%
  );

  display: flex;
  margin-top: 96px;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 48px 0;
  height: 450px;
`;

export const Lin = styled.div`
  height: 1px;
  width: 1230px;
  background: linear-gradient(270deg, #4d5ef6 0%, #f64d4d 100%);
`;

export const Data = styled.div`
  display: flex;
  margin-bottom: 40px;
  margin-top: 40px;
  gap: 875px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  width: 100%;
`;

export const Title = styled.div`
  display: flex;
  gap: 74px;
  justify-content: space-between;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #000000;
  margin-top: 60px;
`;

Content.Item = styled.div`
  display: flex;
  gap: 26px;
  margin-top: 20px;
  color: #000000;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

export const Icons = styled.div``;
Icons.Facebook = styled(facebook)``;
Icons.Instagram = styled(instagram)``;
Icons.Telegram = styled(telegram)``;
Icons.Tiktok = styled(tiktok)``;
