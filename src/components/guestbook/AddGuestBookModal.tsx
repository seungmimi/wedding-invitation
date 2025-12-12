import ModalUi from "../../asset/ui/ModalUi";
import styled from "styled-components";
import TopDecoTitle from "../../asset/ui/TopDecoTitle";
import { useState } from "react";

import { GuestbookType } from ".";
import moment from "moment";

interface AddModalProps {
  closeModal: () => void;
  addDoc: (data: GuestbookType) => void;
}

const ModalBox = styled.div`
  width: calc(100% - 26px);
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border-radius: 15px;
  img {
    width: 100%;
    aspect-ratio: 1/1.5;
  }
  .form-box {
    padding: 24px 16px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: center;
    form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      .submit-btn {
        margin-top: 16px;
        width: 100%;
        height: 46px;
        text-align: center;
        font-size: 1rem;
        border-radius: 5px;
        color: #fff;
        background-color: #606f48;
      }
    }
  }
`;

const FormBox = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  > input,
  > textarea {
    padding: 8px;
    border: solid 1px #d9d9d9;
    border-radius: 5px;
    height: 40px;
  }
  > textarea {
    height: 200px;
  }
  .err-msg {
    padding: 6px 10px;
    border-radius: 5px;
    color: #b02a37;
    background-color: #f8d7da;
  }
`;

export default function AddGuestBookModal(props: AddModalProps) {
  const [content, setContent] = useState("");
  const [writer, setWriter] = useState("");

  const handleSubmit = () => {
    const now = new Date();
    const submitData = {
      content: content,
      name: writer,
      date: moment(now).format("YYYY.MM.DD HH:mm"),
    };
    props.addDoc(submitData);
  };

  return (
    <ModalUi closeFn={props.closeModal}>
      <ModalBox>
        <div className="form-box">
          <TopDecoTitle>GUESTBOOK</TopDecoTitle>
          <form>
            <FormBox>
              <span>내용*</span>
              <textarea value={content} onChange={(e) => setContent(e.target.value)} maxLength={500} />
              <p className="err-msg">* 내용을 입력해주세요</p>
            </FormBox>
            <FormBox>
              <span>작성자*</span>
              <input type="text" value={writer} onChange={(e) => setWriter(e.target.value)} maxLength={100} />
              <p className="err-msg">* 작성자를 입력해주세요</p>
            </FormBox>
            <button className="submit-btn" type="button" onClick={handleSubmit}>
              작성하기
            </button>
          </form>
        </div>
      </ModalBox>
    </ModalUi>
  );
}
