import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        display: "flex",
        gap: "5px",
        width: "149px",
        height: "46px",
        background: "linear-gradient(270deg, #4D5EF6 0%, #F64D4D 100%);",
        border: "1px solid #ffffff",
        color: "#ffffff",
        borderRadius: "10px",
      };
    case "light":
      return {
        width: "105px",
        height: "46px",
        background:
          "linear-gradient(270deg, rgba(77, 94, 246, 0.2) 0%, rgba(246, 77, 77, 0.2) 100%);",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
        borderRadius: "10px",
      };
    case "primary":
      return {
        width: "60px",
        height: "46px",
        background: "#0D63F3",
        borderRadius: "0px 10px 10px 0px",
        border: "none",
        color: "white",
      };
    default:
      return {
        width: "46px",
        height: "46px",
        background: "#ECF4FF;",
        borderRadius: "10px",
        border: "none",
        color: "white",
      };
  }
};

const getWidth = ({ width }) => {
  if (!width) return "130px";
  else if (`${width}`.includes("%")) return "100%";
  else return `${width}px`;
};

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 10px;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${getWidth};

  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${getType};

  :active {
    transform: scale(0.95);
  }
`;
