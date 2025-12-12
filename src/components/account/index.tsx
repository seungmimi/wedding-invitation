import { Box } from "../../asset/ui/ContentBox";
import DecoImg from "../../asset/day-deco.png";

import styled from "styled-components";
const ContnetBox = styled.div`
  width: 100%;
  padding: 0 20px;
`;
const AccordionBox = styled.div`
  .a-header {
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: #fafbfb;
    border-radius: 5px;
    padding: 10px 14px;
    margin-bottom: 4px;
    img {
      width: 18px;
    }
    i {
      margin-left: auto;
    }
  }
  .a-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e7e9e7;
    border-radius: 5px;
    padding: 10px 14px;
    > div {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default function Account() {
  return (
    <Box>
      <h3>마음 전하실 곳</h3>
      <p>
        참석이 어려우신 분들을 위해 기재했습니다 <br />
        너그러운 마음으로 양해 부탁드립니다
      </p>
      <ContnetBox>
        <AccordionBox>
          <div className="a-header">
            <img src={DecoImg} alt="" />
            <span>신랑측</span>
            <i className="icon icon-arrow-down" />
          </div>
          <div className="a-content">
            <div>
              <b>국민은행 1234-12-122132-12</b>
              <span>예금주: 임기범</span>
            </div>
            <button type="button">복사</button>
          </div>
        </AccordionBox>
      </ContnetBox>
    </Box>
  );
}
