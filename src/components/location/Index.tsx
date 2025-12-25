import { Box } from "../../asset/ui/ContentBox";
import TopDecoTitle from "../../asset/ui/TopDecoTitle";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import styled from "styled-components";

const TextBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: "GangwonEducationModuche";
  color: #666;
  font-size: 1rem;
  h3 {
    color: #606f48;
    font-weight: 700;
    font-size: 1.25rem;
  }
`;

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;
  .infoObj {
    display: flex;
    gap: 10px;
    color: #606f48;
    font-family: "GangwonEducationModuche";
    font-size: 1.25rem;
    .infoTitle {
      width: 75px;
      flex-shrink: 0;
      font-weight: 700;
    }
    .desc {
      font-size: 1rem;
    }
  }
`;

export default function MapInfo() {
  const locationInfo = [
    { method: "지하철", content: "4호선 범계역 7번 출구 도보 2분" },
    { method: "버스", content: "동안경찰서 · 범계역 정류장 하차" },
    { method: "주차안내", content: "건물 지하 주차장 이용(2시간 무료)", desc: "*주차요원 안내에 따라 이동해주세요" },
  ];
  return (
    <Box>
      <TopDecoTitle>LOCATION</TopDecoTitle>
      <TextBox data-aos="fade-up">
        <h3>파티오벨라 마리에 가든홀 1F</h3>
        <span>경기도 안양시 동안구 시민대로159번길 25</span>
      </TextBox>

      <Map
        data-aos="zoom-in"
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 37.3906086,
          lng: 126.94753839,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "350px",
        }}
        level={3} // 지도의 확대 레벨
        itemID="854925"
        // draggable={false}
        // zoomable={true}
      >
        <MapMarker
          position={{
            lat: 37.3906086,
            lng: 126.94753839,
          }}
        ></MapMarker>
      </Map>

      <LocationInfo data-aos="fade-up">
        {locationInfo.map((e, i) => {
          return (
            <div className="infoObj" key={i}>
              <span className="infoTitle">{e.method}</span>
              <p className="infoContent">
                {e.content}
                <br />
                {e.desc && <span className="desc">{e.desc}</span>}
              </p>
            </div>
          );
        })}
      </LocationInfo>
    </Box>
  );
}
