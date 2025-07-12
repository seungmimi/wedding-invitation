import styled from "styled-components";

interface BoxProps {
  isBg: boolean;
}

const Box = styled.section<BoxProps>`
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  background-color: ${(props) => (props.isBg ? "#F1F2F4" : "#fff")};
`;

export { Box };
