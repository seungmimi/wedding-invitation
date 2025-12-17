import { useState } from "react";
import { Box } from "../../asset/ui/ContentBox";
import TopDecoTitle from "../../asset/ui/TopDecoTitle";
import styled from "styled-components";
import DetailModal from "./DetailModal";
import HideBtn from "../../asset/hide-btn.png";
import MoreBtn from "../../asset/more-btn.png";

const SnapWrapper = styled.div<{ $showall: boolean }>`
  overflow: hidden;
  transition: max-height 0.5s ease;
  max-height: ${(props) => (props.$showall ? "2000px" : "450px")};
`;

const SnapListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  padding: 0 20px;
  .snapObj {
    background-color: #ddd;
    border-radius: 10px;
    width: 100%;
    max-width: 142px;
    aspect-ratio: 1;
    overflow: hidden;
    > img {
      width: 100%;
    }
  }
`;

const MoreButton = styled.button`
  max-width: 120px;
  cursor: pointer;
  > img {
    width: 100%;
  }
`;

export default function Snap() {
  const [showAll, setShowAll] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectImg, setSelectImg] = useState({ no: 1, url: "" });

  const imgArray = Array.from({ length: 21 }, (_, i) => ({
    no: i + 1,
    url: `${process.env.PUBLIC_URL}/snapImg/${i + 1}.jpg`,
  }));

  const displayedList = showAll ? imgArray : imgArray.slice(0, 9);

  const handleImgClick = (imgInfo: any) => {
    setSelectImg({ no: imgInfo.no, url: imgInfo.url });
    setDetailOpen(true);
  };

  return (
    <>
      <Box>
        <TopDecoTitle>SNAP</TopDecoTitle>
        <SnapWrapper $showall={showAll}>
          <SnapListBox>
            {displayedList.map((e) => (
              <div className="snapObj" key={e.no} onClick={() => handleImgClick(e)}>
                <img src={e.url} alt="" />
              </div>
            ))}
          </SnapListBox>
        </SnapWrapper>

        <MoreButton onClick={() => setShowAll(!showAll)}>
          <img src={showAll ? HideBtn : MoreBtn} alt="접기/펼치기" />
        </MoreButton>
      </Box>
      {detailOpen && <DetailModal imgIndex={selectImg.no} closeModal={() => setDetailOpen(false)} imgList={imgArray} />}
    </>
  );
}
