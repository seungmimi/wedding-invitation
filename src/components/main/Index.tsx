import styled from "styled-components";
import img from "../../asset/invi-main-img.png";
import { ReactComponent as Title1 } from "../../asset/main-title-1.svg";
import decoImg1 from "../../asset/deco-img-1.png";

interface TitleBoxProps {
  position: string;
}

const MainBox = styled.section`
  margin-bottom: 18px;
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`;

const TitleBox = styled.div<TitleBoxProps>`
  width: 100%;
  position: absolute;
  left: 50%;
  ${(props) => (props.position === "top" ? "top" : "bottom")}: 15%;
  transform: translateX(-50%);
  text-align: center;
`;

const MainTitle = styled.h1`
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-family: "Cafe24Meongi-w";
  font-size: 4.5rem;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Hakgyoansim-Chilpanjiugae-B";
  color: #fff;
  font-size: 1.875rem;
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  img {
    max-width: 41px;
  }
  strong {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    font-family: "Cafe24Behappy";
    font-size: 3.125rem;
    letter-spacing: 0.125rem;
    text-shadow: 0px 11px 10px rgba(0, 0, 0, 0.2);
    span {
      font-family: "Cafe24Behappy";
      font-size: 1.8rem;
      color: rgba(255, 255, 255, 0.5);
      padding: 0 6px 4px 0;
    }
  }
`;

export default function Main() {
  return (
    <MainBox>
      <TitleBox position="top">
        <Title1 />
        <MainTitle>
          Happily
          <br />
          ever
          <br />
          after
        </MainTitle>
      </TitleBox>
      <TitleBox position="bottom">
        <SubTitle>
          <div>
            <span>기범</span>
            <img src={decoImg1} alt="" />
            <span>승미</span>
          </div>
          <strong>
            2026.04.11 <span>sat</span> 11:00
          </strong>
        </SubTitle>
      </TitleBox>
    </MainBox>
  );
}
