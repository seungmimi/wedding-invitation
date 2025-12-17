import { Box } from "../../asset/ui/ContentBox";
import DecoImg from "../../asset/day-deco.png";

import styled from "styled-components";
const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  font-family: "GangwonEducationModuche";
  color: #606f48;
  h3 {
    color: #606f48;
    font-weight: 700;
    font-size: 1.25rem;
  }
  .desc {
    text-align: center;
    font-size: 18px;
    color: #666;
  }
`;
const ContnetBox = styled.div`
  width: 100%;
  padding: 0 20px;
  .re {
    background-color: #fff;
    text-align: center;
    padding: 10px 20px;
    border-radius: 15px;
    color: #666;
  }
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
      <TitleBox>
        <h3>마음 전하실 곳</h3>
        <p className="desc">
          직접 축하를 전하지 못하는 분들을 위해
          <br />
          부득이하게 계좌번호를 기재하게 되었습니다.
          <br />
          넓은 마음으로 양해 부탁드립니다.
        </p>
      </TitleBox>
      <ContnetBox>
        <div className="re">준비중 입니다.</div>
        {/* <AccordionBox>
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
        </AccordionBox> */}
      </ContnetBox>
    </Box>
  );
}
