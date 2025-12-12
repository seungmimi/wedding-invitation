import { useEffect } from "react";

import "./App.css";
import WeddingDay from "./components/calendar/Index";
import Invitation from "./components/invitation/Index";
import MapInfo from "./components/location/Index";
import Snap from "./components/snap/Index";

import Main from "./components/main/Index";
import Guestbook from "./components/guestbook";

function App() {
  const kakao = (window as any).Kakao;
  useEffect(() => {
    if (kakao && !kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAOSDK_KEY);
    }
  }, []);
  const shareKakao = () => {
    const kakao = (window as any).Kakao;
    if (kakao && kakao.Share && typeof kakao.Share.sendCustom === "function") {
      kakao.Share.sendCustom({
        templateId: 126815,
      });
    } else {
      console.warn("Kakao.Share가 아직 준비되지 않았습니다.");
    }
  };
  return (
    <div className="App">
      <main className="main-wrap">
        <Main />
        <Invitation />
        <WeddingDay />
        <MapInfo />
        <Snap />
        <Guestbook />
      </main>
      <footer>
        <button onClick={shareKakao}>카카오톡 공유</button>
      </footer>
    </div>
  );
}

export default App;
