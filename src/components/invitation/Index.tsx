import { Box } from "../ContentBox";
import TopDecoTitle from "../TopDecoTitle";
import decoImg from "../../asset/deco-img-1.png";
import styled from "styled-components";

const SubTitle = styled.strong`
  font-size: 1.25rem;
  text-align: center;
  font-family: "BookkMyungjo_Bold";
  color: #47778b;
  span {
    font-family: "BookkMyungjo_Light";
    color: #666666;
    font-size: 0.85rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 8px;
  }
`;
const TextBox = styled.p`
  text-align: center;
  line-height: 173%;
  font-family: "BookkMyungjo_Light";
  color: #333;
  img {
    display: block;
    max-width: 41px;
    padding-top: 24px;
    margin: 0 auto;
  }
`;

export default function Invitation() {
  return (
    <Box isBg={false}>
      <TopDecoTitle>INVITATION</TopDecoTitle>
      <SubTitle>소중한 분들을 초대합니다</SubTitle>
      <TextBox>
        열 번의 봄과 겨울을 함께한 우리,
        <br />
        드디어 결혼합니다.
        <br />
        10년을 함께 걸은 만큼 앞으로도
        <br />
        변함없이 함께 걸어가려 합니다.
        <br />
        <br />
        저희의 특별한 날,
        <br />
        함께해 주시면 더없이 행복하겠습니다
        <img src={decoImg} alt="" />
      </TextBox>
      <SubTitle>
        <p>
          임재용 · 오명숙<span> 의 차남 </span>기범
        </p>
        <p>
          이재희 · 박미실<span> 의 차녀 </span>승미
        </p>
      </SubTitle>
    </Box>
  );
}
