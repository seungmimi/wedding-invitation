import { useState, useEffect } from "react";
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
    cursor: pointer;
    > img {
      width: 100%;
      display: block;
      user-select: none;
    }
  }
`;

const MoreButton = styled.button`
  max-width: 120px;
  cursor: pointer;

  > img {
    width: 100%;
    display: block;
  }
`;

export default function Snap() {
  const [showAll, setShowAll] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectImg, setSelectImg] = useState({ no: 1, url: "" });

  /** 🔥 이미지 리스트 */
  const imgArray = Array.from({ length: 21 }, (_, i) => ({
    no: i + 1,
    url: `${process.env.PUBLIC_URL}/snapImg/${i + 1}.jpg`,
  }));

  /** ✅ 전체 이미지 preload (렌더와 무관) */
  useEffect(() => {
    const cache: HTMLImageElement[] = [];

    imgArray.forEach((img) => {
      const image = new Image();
      image.src = img.url;
      cache.push(image);
    });

    return () => {
      cache.length = 0;
    };
  }, []);

  /** 렌더링용 리스트 */
  const displayedList = showAll ? imgArray : imgArray.slice(0, 9);

  const handleImgClick = (imgInfo: { no: number; url: string }) => {
    setSelectImg(imgInfo);
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
                <img src={e.url} alt={`snap-${e.no}`} />
              </div>
            ))}
          </SnapListBox>
        </SnapWrapper>

        <MoreButton onClick={() => setShowAll((prev) => !prev)}>
          <img src={showAll ? HideBtn : MoreBtn} alt="더보기/접기" />
        </MoreButton>
      </Box>

      {detailOpen && <DetailModal imgIndex={selectImg.no} imgList={imgArray} closeModal={() => setDetailOpen(false)} />}
    </>
  );
}
