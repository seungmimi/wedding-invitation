import { Box } from "../ContentBox";
import TopDecoTitle from "../TopDecoTitle";
import decoLine from "../../asset/deco-line-1.png";
import styled from "styled-components";
import Calendar from "./Calendar";

import DecoImg from "../../asset/day-deco.png";

const TextBpx = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #47778b;
  strong {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: "Cafe24Meongi-B";
    font-size: 2rem;
    span {
      font-size: 1.5rem;
      color: rgba(71, 119, 139, 0.5);
    }
  }
  > span {
    font-size: 1.25rem;
    font-family: "Hakgyoansim-Chilpanjiugae-B";
  }
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 0 42px;
  img {
    width: 100%;
  }
`;

const DDayInfo = styled.p`
  font-family: "Hakgyoansim-Chilpanjiugae-L";
  font-size: 1.25rem;
  color: #666;
  & img {
    width: 13px;
    vertical-align: inherit;
    margin: 0 4px;
  }
  & strong {
    font-size: 1.5rem;
    font-family: "Hakgyoansim-Chilpanjiugae-B";
    &.days {
      color: #47778b;
    }
  }
`;

const today: Date = new Date();
const targetDate: Date = new Date("2026-4-11");
const diffDays = Math.ceil((+targetDate - +today) / (1000 * 60 * 60 * 24));

export default function WeddingDay() {
  return (
    <Box isBg={true}>
      <TopDecoTitle>WEDDING DAY</TopDecoTitle>
      <TextBpx>
        <strong>
          2026<span>/</span>4<span>/</span>11
        </strong>
        <span>토요일 오전 11시</span>
      </TextBpx>
      <CalendarBox>
        <img src={decoLine} alt="" />
        <Calendar />
        <img src={decoLine} alt="" />
      </CalendarBox>
      <DDayInfo>
        <strong>
          기범
          <img src={DecoImg} alt="" />
          승미
        </strong>
        의 결혼식이 <strong className="days">{diffDays}</strong>일 남았습니다
      </DDayInfo>
    </Box>
  );
}
