import { Box } from "../../asset/ui/ContentBox";
import TopDecoTitle from "../../asset/ui/TopDecoTitle";
import styled from "styled-components";

import BoxBg from "../../asset/guestbook-box.png";
import DecoImg from "../../asset/deco-img-1.png";
import moment from "moment";

import { appFirestore } from "../../fBase";
import { addDoc, collection, getDocs, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import AddGuestBookModal from "./AddGuestBookModal";

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
      height: 97px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
    img {
      padding: 8px 0;
      width: 70px;
    }
    .writer-box {
      width: 100%;
      display: flex;
      gap: 4px;
      justify-content: space-between;
      font-family: "GangwonEducationModuche";
      color: #606f48;
      span:first-child {
        flex-shrink: 0;
      }
      span {
        word-break: break-all;
      }
    }
    .obj-footer {
      width: 100%;
      display: flex;
      flex-direction: column;
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

export type GuestbookType = {
  id?: string;
  content: string;
  name: string;
  date?: any;
};

export default function Guestbook() {
  const [guestbookList, setGuestbookList] = useState<GuestbookType[]>([]);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const getGuestbookList = async () => {
    try {
      const res = await getDocs(query(collection(appFirestore, "guestbook"), orderBy("date", "desc")));
      if (res) {
        const dataList = res.docs;
        setGuestbookList(
          dataList.map((doc) => ({
            ...(doc.data() as GuestbookType),
            id: doc.id,
          }))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addGuestbook = async (data: GuestbookType) => {
    try {
      const res = await addDoc(collection(appFirestore, "guestbook"), data);
      if (res) {
        setAddModalOpen(false);
        getGuestbookList();
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getGuestbookList();
  }, []);
  return (
    <>
      <Box className="bg-white">
        <TopDecoTitle>GUESTBOOK</TopDecoTitle>
        <ListBox>
          {guestbookList?.map((e, i) => {
            return (
              <li key={e.id}>
                <img src={DecoImg} alt="" />
                <div className="writer-box">
                  <span>from. </span>
                  <span className="writing-date">{e.name}</span>
                </div>
                <p className="content">{e.content}</p>
                <div className="obj-footer">
                  <span className="writing-date">{moment(e.date).format("YYYY.MM.DD HH:mm")}</span>
                </div>
              </li>
            );
          })}
        </ListBox>
        <AddBtn onClick={() => setAddModalOpen(true)}>방명록 작성하기</AddBtn>
      </Box>
      {addModalOpen && <AddGuestBookModal closeModal={() => setAddModalOpen(false)} addDoc={addGuestbook} />}
    </>
  );
}
