import styled from "styled-components";
import { ReactComponent as right } from "../../assets/icons/Right.svg";
import { ReactComponent as left } from "../../assets/icons/Left.svg";

export const Container = styled.div`
  position: relative;
  height: fit-content;
  padding: var(--padding);
`;

export const Icons = styled.div``;

Icons.Left = styled(left)`
  position: absolute;
  cursor: pointer;
  :hover {
    background: linear-gradient(270deg, #4d5ef6 0%, #f64d4d 100%);
  }
  background: linear-gradient(
    270deg,
    rgba(77, 94, 246, 0.2) 0%,
    rgba(246, 77, 77, 0.2) 100%
  );
  :active {
    transform: scale(0.95);
  }
  top: 50%;
  left: 120px;
  border-radius: 50%;
  padding: 11px 9px;
  width: 38px;
  height: 38px;
`;

Icons.Right = styled(right)`
  background: linear-gradient(270deg, #4d5ef6 0%, #f64d4d 100%);
  border-radius: 50%;
  cursor: pointer;
  & path {
    fill: #000000;
  }
  :hover {
    background: linear-gradient(
      270deg,
      rgba(77, 94, 246, 0.2) 0%,
      rgba(246, 77, 77, 0.2) 100%
    );
  }
  :active {
    transform: scale(0.95);
  }
  position: absolute;
  top: 50%;
  right: 120px;
  padding: 11px 9px;
  width: 38px;
  height: 38px;
`;

export const Img = styled.img`
  margin-top: 40px;
  border-radius: 20px;
`;
