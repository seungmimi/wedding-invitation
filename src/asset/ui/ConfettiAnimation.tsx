import React, { useEffect, useRef } from "react";
import confetti, { CreateTypes } from "canvas-confetti";

const ConfettiAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 워커 없이 캔버스 기반 confetti 생성
    const myConfetti: CreateTypes = confetti.create(canvasRef.current, {
      resize: true, // 창 크기 변경 시 자동 조정
      useWorker: false, // 워커 사용 안함
    });

    const duration = 30000; // 30초
    const animationEnd = Date.now() + duration;
    let skew = 1;
    let frameCounter = 0;

    const randomInRange = (min: number, max: number): number => {
      return Math.random() * (max - min) + min;
    };

    const frame = () => {
      frameCounter++;

      // 5프레임마다 한 번만 입자 생성
      if (frameCounter % 10 === 0) {
        const timeLeft = animationEnd - Date.now();
        const ticks = Math.max(150, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);

        myConfetti({
          particleCount: 1, // 한 번에 1개만
          startVelocity: 0,
          ticks: ticks,
          origin: {
            x: Math.random(),
            y: Math.random() * skew - 0.2,
          },
          colors: ["#ffc7c7c0"],
          shapes: ["circle"],
          gravity: randomInRange(0.4, 0.6),
          scalar: randomInRange(0.4, 1),
          drift: randomInRange(-0.4, 0.4),
        });
      }

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 999,
      }}
    />
  );
};

export default ConfettiAnimation;
