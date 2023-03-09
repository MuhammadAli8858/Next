import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #ffffff",
        color: "#ffffff",
      };
    case "light":
      return {
        background: "#ffffff",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "white",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "white",
      };
  }
};

export const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  min-width: 196px;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "46px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  outline: none;
  border: 1px solid #e4e7ee;

  padding-left: ${({ icon }) => (icon ? "35px" : "18px")};
  /* ${getType}; */
  :focus {
    border: 1px solid #0d63f3;
  }
  :active {
    opacity: 0.7;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  /* width: ${({ width }) => (width ? `${width}px` : "100%")}; */
`;

export const Icon = styled.div`
  position: absolute;
  transform: translate(-50, -50);
  left: 10px;
`;
