import { useEffect, useState } from "react";
import styled from "styled-components";
import LoadingImg from "../loading_img.gif";

// fadeOut prop은 DOM에 전달되지 않도록
const LoadingBg = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fadeOut",
})<{ fadeOut: boolean }>`
  position: fixed;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  background-color: #f1eee9;
  opacity: ${({ fadeOut }) => (fadeOut ? 0 : 1)};
  transition: opacity 0.8s ease;
  pointer-events: ${({ fadeOut }) => (fadeOut ? "none" : "all")};
`;

// active prop도 DOM에 전달되지 않도록
const Year = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})<{ active: boolean }>`
  color: ${({ active }) => (active ? "#D77200" : "#555")};
  transition: color 0.2s ease;
`;

const CenterBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .title-box {
    font-family: "Cafe24Meongi-b";
    color: #1a3512;
    font-size: 1.2rem;
    span {
      b {
        font-family: "Cafe24Behappy";
        color: #d77200;
      }
    }
    p {
      font-size: 2.5rem;
    }
  }
`;

const LoadimgImgBox = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const LoadingImgStyled = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  max-width: 300px;
`;

const YearWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  margin-bottom: 6px;
  font-family: "Cafe24Behappy";
`;

const ProgressWrapper = styled.div`
  width: 300px;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background-color: #606f48;
  transition: width 0.03s linear;
`;

interface LoadingProps {
  onFinish: () => void;
}

export default function Loading({ onFinish }: LoadingProps) {
  const [progress, setProgress] = useState<number>(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const DURATION = 3000;
    const INTERVAL = 30;
    const step = 100 / (DURATION / INTERVAL);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          // 0.5초 대기 후 페이드아웃 시작
          setTimeout(() => setFadeOut(true), 500);

          // 0.8초 페이드아웃 후 onFinish 호출
          setTimeout(onFinish, 1300);

          return 100;
        }
        return prev + step;
      });
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [onFinish]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const years = Array.from({ length: 6 }, (_, i) => 2016 + i * 2);
  const currentYear = 2016 + (progress / 100) * 10;

  return (
    <LoadingBg fadeOut={fadeOut}>
      <CenterBox>
        <div className="title-box">
          <span>
            KI BEOM <b>`</b> SEUNG MI
          </span>
          <p>WEDDING DAY!</p>
        </div>

        <LoadimgImgBox>
          <LoadingImgStyled src={LoadingImg} alt="loading" />
        </LoadimgImgBox>

        <YearWrapper>
          {years.map((year) => (
            <Year key={year} active={year <= currentYear}>
              {year}
            </Year>
          ))}
        </YearWrapper>

        <ProgressWrapper>
          <ProgressBar progress={progress} />
        </ProgressWrapper>
      </CenterBox>
    </LoadingBg>
  );
}
