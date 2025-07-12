import styled from "styled-components";
import DecoBg from "../asset/topDecoTitleBg.png";

interface TopDecoTitleProps {
  children?: string; // 자식으로 문자열을 받을 거라고 타입 정의
}

const DecoTitleBox = styled.h3`
  background: url(${DecoBg}) no-repeat center / contain;
  width: 177px;
  height: 34px;
  text-align: center;
  line-height: 34px;
  font-size: 1.625rem;
  color: #47778b;
  font-family: "Cafe24Behappy";
`;

export default function TopDecoTitle(props: TopDecoTitleProps) {
  return <DecoTitleBox>{props.children}</DecoTitleBox>;
}
