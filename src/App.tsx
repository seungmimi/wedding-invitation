import "./App.css";
import WeddingDay from "./components/calendar/Index";
import Invitation from "./components/invitation/Index";
import MapInfo from "./components/location/Index";

import Main from "./components/main/Index";

function App() {
  return (
    <div className="App">
      <main className="main-wrap">
        <Main />
        <Invitation />
        <WeddingDay />
        <MapInfo />
      </main>
    </div>
  );
}

export default App;
