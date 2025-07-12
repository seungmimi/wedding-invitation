import React from "react";
import styled, { keyframes } from "styled-components";
import DecoImg from "../../asset/day-deco.png";

const WeekBox = styled.div`
  display: flex;
  margin-bottom: 24px;
  .week {
    flex: 1;
    font-family: "BookkMyungjo_Bold";
    font-size: 0.875rem;
    text-align: center;
    color: #666666;
    &:first-child {
      color: #b81111;
    }
    &:last-child {
      color: #374173;
    }
  }
`;

const DayBox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px 0px;
  .day {
    text-align: center;
    color: #666666;
    font-family: "Hakgyoansim-Chilpanjiugae-B";
    font-size: 1.25rem;
    position: relative;
    &:nth-child(7n) span {
      color: #374173;
    }
    &:nth-child(7n + 1) span {
      color: #b81111;
    }
    &:nth-child(14) span {
      color: #fff;
      z-index: 2;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const rotateDeco = keyframes`
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
`;
const DayDeco = styled.div`
  width: 45px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  & img {
    width: 100%;
    animation: ${rotateDeco} 5s infinite linear;
  }
`;

const Calendar: React.FC = () => {
  const year: number = 2026;
  const month: number = 3;
  const weekdays: string[] = ["일", "월", "화", "수", "목", "금", "토"];
  const firstDay: Date = new Date(year, month, 1);
  const startingDay: number = firstDay.getDay();

  const numDays: number = new Date(year, month + 1, 0).getDate();

  const calendarCells: (number | null)[] = [];

  for (let i = 0; i < startingDay; i++) {
    calendarCells.push(null);
  }

  for (let day = 1; day <= numDays; day++) {
    calendarCells.push(day);
  }

  return (
    <div>
      {/* 요일 헤더 영역 */}
      <WeekBox>
        {weekdays.map((day, index) => (
          <span key={index} className="week">
            {day}
          </span>
        ))}
      </WeekBox>

      {/* 달력 날짜 그리드 */}
      <DayBox>
        {calendarCells.map((day, cellIndex) => (
          <div key={cellIndex} className="day">
            {day === 11 ? (
              <DayDeco>
                <img src={DecoImg} alt="" />
              </DayDeco>
            ) : (
              ""
            )}
            <span>{day !== null ? day : ""}</span>
          </div>
        ))}
      </DayBox>
    </div>
  );
};

export default Calendar;
