import styled from "styled-components";

export const Container = styled.div`
  padding: var(--padding);
  margin-top: 76px;
`;

export const Content = styled.div`
  display: flex;
  gap: 21px;
  justify-content: center;
  align-items: center;
`;

Content.Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 146px;
  height: 200px;
  border: 0.5px solid #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 9px 0px;
  background: #ffffff;
  cursor: pointer;
  :hover {
    color: rgba(0, 214, 1, 0.99);
  }
  :active {
    opacity: 0.7;
  }
`;

export const Img = styled.img`
  margin-bottom: 13px;
  width: 134px;
  height: 136px;
`;
