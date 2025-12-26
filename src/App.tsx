import { useEffect, useState } from "react";

import "./App.css";
import WeddingDay from "./components/calendar/Index";
import Invitation from "./components/invitation/Index";
import MapInfo from "./components/location/Index";
import Snap from "./components/snap/Index";
import Main from "./components/main/Index";
import Guestbook from "./components/guestbook";
import Account from "./components/account";
import FooterBg from "./asset/footer-bg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import ConfettiAnimation from "./asset/ui/ConfettiAnimation";
import Loading from "./asset/ui/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const kakao = (window as any).Kakao;

  useEffect(() => {
    // AOS 초기화
    AOS.init({ duration: 800 });

    // Kakao SDK 초기화
    if (kakao && !kakao.isInitialized()) {
      kakao.init(process.env.REACT_APP_KAKAOSDK_KEY);
    }

    // 앱 시작 시 스크롤 막기
    document.body.style.overflow = "hidden";

    return () => {
      // 언마운트 시 스크롤 해제
      document.body.style.overflow = "";
    };
  }, []);

  const shareKakao = () => {
    const kakao = (window as any).Kakao;
    if (kakao?.Share?.sendCustom) {
      kakao.Share.sendCustom({ templateId: 126815 });
    } else {
      console.warn("Kakao.Share가 아직 준비되지 않았습니다.");
    }
  };

  return (
    <div className="App">
      {/* 로딩 UI 표시 */}
      {isLoading && (
        <Loading
          onFinish={() => {
            setIsLoading(false);
            document.body.style.overflow = ""; // 로딩 끝나면 스크롤 해제
          }}
        />
      )}

      {/* 컨페티 애니메이션 */}
      <ConfettiAnimation />

      <main className="main-wrap">
        <Main />
        <Invitation />
        <WeddingDay />
        <MapInfo />
        <Snap />
        <Guestbook />
        <Account />
      </main>

      <footer className="footer">
        <div className="share-box">
          <button className="share-btn" onClick={shareKakao}>
            <img src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png" alt="카카오톡 공유 보내기 버튼" />
          </button>
          <span>카카오톡 공유하기</span>
        </div>

        <img className="footer-bottom-img" src={FooterBg} alt="" />

        <div className="copy">
          <p>©2025 Seung Mi & Ki Beom</p>
          <p>With love, we invite you to our wedding.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
