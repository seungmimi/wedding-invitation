import { Box } from "../ContentBox";
import TopDecoTitle from "../TopDecoTitle";
import { Map } from "react-kakao-maps-sdk";

export default function MapInfo() {
  return (
    <Box isBg={false}>
      <TopDecoTitle>LOCATION</TopDecoTitle>
      <h3>파티오벨라 마리에 가든홀 1F</h3>
      <span>경기도 안양시 동안구 시민대로159번길 25</span>
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 33.450701,
          lng: 126.570667,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "350px",
        }}
        level={3} // 지도의 확대 레벨
      />
    </Box>
  );
}
