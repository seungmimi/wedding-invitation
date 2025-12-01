import { Box } from "../../asset/ui/ContentBox";
import TopDecoTitle from "../../asset/ui/TopDecoTitle";
import decoLine from "../../asset/deco-line-1.png";
import styled from "styled-components";
import Calendar from "./Calendar";

import DecoImg from "../../asset/day-deco.png";
import SideDeco from "../../asset/deco-img-1.png";

import moment from "moment";

const TextBpx = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  strong {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: "Cafe24Behappy";
    font-size: 4.5rem;
    letter-spacing: 2px;
    color: #d77200;
  }
  > span {
    font-size: 1.5rem;
    font-family: "GangwonEducationModuche";
    color: #606f48;
    b {
      font-weight: 700;
    }
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
  + img {
    max-width: 140px;
  }
`;

const DDayInfo = styled.p`
  font-family: "GangwonEducationModuche";
  font-size: 1.25rem;
  color: #666;
  & img {
    width: 13px;
    vertical-align: inherit;
    margin: 0 4px;
  }
  & strong {
    font-size: 1.5rem;
    font-weight: 700;
    &.days {
      color: #606f48;
    }
  }
`;

const today = moment();
const targetDate = moment("2026-4-11");
const diffDays = targetDate.diff(today, "day");

export default function WeddingDay() {
  return (
    <Box>
      <TopDecoTitle>WEDDING DAY</TopDecoTitle>
      <TextBpx>
        <strong>2026.04.11</strong>
        <span>
          토요일 오전 <b>11시</b>
        </span>
      </TextBpx>
      <CalendarBox>
        <img src={decoLine} alt="" />
        <Calendar />
        <img src={decoLine} alt="" />
      </CalendarBox>
      <img src={SideDeco} alt="" />
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
