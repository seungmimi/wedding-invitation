import { Box } from "../../asset/ui/ContentBox";
import TopDecoTitle from "../../asset/ui/TopDecoTitle";
import styled from "styled-components";

import BoxBg from "../../asset/guestbook-box.png";
import DecoImg from "../../asset/deco-img-1.png";

const ListBox = styled.ul`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  padding: 0 20px;
  gap: 10px;
  :-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  > li {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    padding: 16px 10px;
    background: url(${BoxBg}) no-repeat;
    background-size: 160px 250px;
    width: 160px;
    height: 250px;
    .title {
      display: block;
      font-weight: 600;
      text-align: center;
      margin-bottom: 8px;
    }
    .content {
      width: 100%;
      height: 72px;
      color: #666;
    }
    img {
      width: 70px;
    }
    .obj-footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-family: "GangwonEducationModuche";
      color: #606f48;
    }
  }
`;

const AddBtn = styled.button`
  width: calc(100% - 40px);
  margin: 0 auto;
  background-color: #606f48;
  border-radius: 5px;
  color: #fff;
  height: 38px;
`;

export default function Guestbook() {
  return (
    <Box className="bg-white">
      <TopDecoTitle>GUESTBOOK</TopDecoTitle>
      <ListBox>
        <li>
          <span className="title">제목</span>
          <p className="content">내용</p>
          <img src={DecoImg} alt="" />
          <div className="obj-footer">
            <span className="writing-date">작성자</span>
            <span className="writing-date">2026.04.11</span>
          </div>
        </li>
        <li>
          <span className="title">제목</span>
          <p className="content">내용</p>
          <img src={DecoImg} alt="" />
          <div className="obj-footer">
            <span className="writing-date">작성자</span>
            <span className="writing-date">2026.04.11</span>
          </div>
        </li>
        <li>
          <span className="title">제목</span>
          <p className="content">내용</p>
          <img src={DecoImg} alt="" />
          <div className="obj-footer">
            <span className="writing-date">작성자</span>
            <span className="writing-date">2026.04.11</span>
          </div>
        </li>
        <li>
          <span className="title">제목</span>
          <p className="content">내용</p>
          <img src={DecoImg} alt="" />
          <div className="obj-footer">
            <span className="writing-date">작성자</span>
            <span className="writing-date">2026.04.11</span>
          </div>
        </li>
        <li>
          <span className="title">제목</span>
          <p className="content">내용</p>
          <img src={DecoImg} alt="" />
          <div className="obj-footer">
            <span className="writing-date">작성자</span>
            <span className="writing-date">2026.04.11</span>
          </div>
        </li>
      </ListBox>
      <AddBtn>방명록 작성하기</AddBtn>
    </Box>
  );
}
