import styled from "styled-components";
import { ReactComponent as Title1 } from "../../asset/main-title-1.svg";

interface TitleBoxProps {
  position: string;
}

const MainBox = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const TitleBox = styled.div<TitleBoxProps>`
  width: 100%;
  position: absolute;
  left: 50%;
  ${(props) => (props.position === "top" ? "top" : "bottom")}: 10%;
  transform: translateX(-50%);
  text-align: center;
`;

const MainTitle = styled.h1`
  position: absolute;
  top: 32px;
  left: 50%;
  transform: translateX(-50%);
  color: #d77200;
  font-family: "Cafe24Meongi-b";
  font-size: 4.5rem;
  line-height: 3rem;
  z-index: -1;
`;

const SubTitle = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0px 40px;
  font-family: "Cafe24Behappy";
  color: #fff;
  font-size: 3.125rem;
  div {
    display: flex;
    flex-direction: column;
    text-align: start;
  }
  div.line {
    height: 150px;
    width: 2px;
    background-color: #fff;
  }
  img {
    max-width: 41px;
  }
  span {
    text-align: start;
    b {
      color: #d77200;
    }
  }
  strong {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    font-size: 3.125rem;
    letter-spacing: 0.125rem;
    text-shadow: 0px 11px 10px rgba(0, 0, 0, 0.2);
    span {
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
            <span>
              KI BOM <b>`</b> SEUNG MI
            </span>
            <span>WEDDING DAY!</span>
            <strong>
              2026.04.11 <span>sat</span>
            </strong>
          </div>
          <div className="line"></div>
          <span>11:00 AM</span>
        </SubTitle>
      </TitleBox>
    </MainBox>
  );
}
