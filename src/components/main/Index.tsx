import styled from "styled-components";
import { ReactComponent as Title1 } from "../../asset/main-title-1.svg";
import BgImg from "../../asset/main-bg-1.png";

interface TitleBoxProps {
  position: string;
}

const MainBox = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #1a3512;
  background-image: url(${BgImg});
  background-size: cover;
  background-position: center;
`;

const TitleBox = styled.div<TitleBoxProps>`
  width: 100%;
  position: absolute;
  left: 50%;
  ${(props) => (props.position === "top" ? "top" : "bottom")}: 50px;
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
  @media (max-width: 380px) {
    font-size: 3.5rem;
    line-height: 2.5rem;
  }
  @media (min-width: 420px) {
    font-size: 3.5rem;
    line-height: 2.5rem;
  }
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
    height: 1px;
    width: 250px;
    background-color: #fff;
    margin-top: 12px;
    margin-bottom: 8px;
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
    font-size: 2rem;
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
        <div data-aos="fade-down">
          <Title1 />
          <MainTitle>
            Happily
            <br />
            ever
            <br />
            after
          </MainTitle>
        </div>
      </TitleBox>
      <TitleBox position="bottom">
        <SubTitle>
          <div data-aos="fade-up">
            <span>
              KI BEOM <b>`</b> SEUNG MI
            </span>
            <span>WEDDING DAY!</span>
            <div className="line"></div>
            <strong>
              2026.04.11 <span>sat</span>
              <b>11:00 AM</b>
            </strong>
          </div>
        </SubTitle>
      </TitleBox>
    </MainBox>
  );
}
