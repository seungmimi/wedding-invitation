import React, { useEffect } from "react";
import styled from "styled-components";

interface ModalUiProps {
  children: React.ReactNode;
  closeFn: () => void;
}

const ModalWrap = styled.div`
  padding: 0 12px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const ModalCloseBtn = styled.button`
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  background: #fff;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export default function ModalUi(props: ModalUiProps) {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  return (
    <ModalWrap>
      {props.children}
      <ModalCloseBtn onClick={props.closeFn}>
        <i className="icon icon-close" />
      </ModalCloseBtn>
    </ModalWrap>
  );
}
