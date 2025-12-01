import Slider from "react-slick";

import ModalUi from "../../asset/ui/ModalUi";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface DetailModalProps {
  imgList: any[];
  imgIndex: number;
  closeModal: () => void;
}

const ModalBox = styled.div`
  width: calc(100% - 26px);
  height: calc(100% - 180px);
  overflow: hidden;
  position: absolute;
  top: 50px;
  background: #fff;
  border-radius: 15px;
  img {
    width: 100%;
    aspect-ratio: 1/1.5;
  }
`;

const SlideBox = styled.div``;

export default function DetailModal(props: DetailModalProps) {
  const settings = {
    dots: false,
    infinite: false,
    initialSlide: props.imgIndex - 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <ModalUi closeFn={props.closeModal}>
      <ModalBox>
        <div className="slider-container custom">
          <Slider {...settings}>
            {props.imgList.map((e) => {
              return (
                <SlideBox key={e.no}>
                  <img src={e.url} alt="" />
                </SlideBox>
              );
            })}
          </Slider>
        </div>
      </ModalBox>
    </ModalUi>
  );
}
