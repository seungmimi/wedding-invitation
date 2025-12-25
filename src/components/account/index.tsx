import { Box } from "../../asset/ui/ContentBox";
import DecoImg from "../../asset/day-deco.png";
import styled from "styled-components";
import { useState } from "react";
import { toast } from "react-toastify";

interface AccountItem {
  name: string;
  account: string;
}

interface AccordionProps {
  title: string;
  list: AccountItem[];
}

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  font-family: "GangwonEducationModuche";
  color: #606f48;
  h3 {
    font-weight: 700;
    font-size: 1.25rem;
  }
  .desc {
    text-align: center;
    font-size: 18px;
    color: #666;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const AccordionBox = styled.div`
  margin-bottom: 16px;
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
      transition: all 0.2s;
    }
  }

  .a-content-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
    background-color: #e7e9e7;
    overflow-y: auto;
    height: 0;
    transition: height 0.2s;
    &.open {
      height: 250px;
    }
  }

  .a-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    > div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    b {
      color: #666;
    }
    span {
      color: #666;
      font-size: 1rem;
    }
    .copy-btn {
      background-color: #606f48;
      border-radius: 5px;
      padding: 10px 16px;
      color: #fff;
      cursor: pointer;
    }
  }
`;

function Accordion({ title, list }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const clickCopyBtn = async (account: string) => {
    try {
      await navigator.clipboard.writeText(account);
      toast.success("📝 계좌번호가 복사되었습니다");
    } catch (err) {
      console.error("복사 실패:", err);
      toast.error("😰 계좌번호복사에 실패했습니다");
    }
  };

  return (
    <AccordionBox data-aos="zoom-in">
      <div className="a-header" onClick={() => setIsOpen((prev) => !prev)}>
        <img src={DecoImg} alt="" />
        <span>{title}</span>
        <i className="icon icon-arrow-down" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
      </div>
      <div className={`a-content-box ${isOpen ? "open" : ""}`}>
        {list.map((item, index) => (
          <div className="a-content" key={index}>
            <div>
              <b>{item.account}</b>
              <span>예금주: {item.name}</span>
            </div>
            <button type="button" className="copy-btn" onClick={() => clickCopyBtn(item.account)}>
              복사
            </button>
          </div>
        ))}
      </div>
    </AccordionBox>
  );
}

export default function Account() {
  const accountListA: AccountItem[] = [
    { name: "임재용", account: "하나은행 665-910376-13907" },
    { name: "오명숙", account: "국민은행 663301-01-182923" },
    { name: "임기범", account: "국민은행 620602-01-338737" },
  ];
  const accountListB: AccountItem[] = [
    { name: "이재희", account: "준비중 입니다" },
    { name: "박미실", account: "준비중 입니다" },
    { name: "이승미", account: "기업은행 233-108073-01-017" },
  ];

  return (
    <Box>
      <TitleBox data-aos="fade-up">
        <h3>마음 전하실 곳</h3>
        <p className="desc">
          직접 축하를 전하지 못하는 분들을 위해
          <br />
          부득이하게 계좌번호를 기재하게 되었습니다.
          <br />
          넓은 마음으로 양해 부탁드립니다.
        </p>
      </TitleBox>
      <ContentBox>
        <Accordion title="신랑측" list={accountListA} />
        <Accordion title="신부측" list={accountListB} />
      </ContentBox>
    </Box>
  );
}
