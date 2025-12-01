import "./App.css";
import WeddingDay from "./components/calendar/Index";
import Invitation from "./components/invitation/Index";
import MapInfo from "./components/location/Index";
import Snap from "./components/snap/Index";

import Main from "./components/main/Index";
import Guestbook from "./components/guestbook";

function App() {
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
    </div>
  );
}

export default App;
