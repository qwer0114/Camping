import NavBar from "../components/header/NavBar";
import { useNavigate } from "react-router-dom";
import MyLocation from "../components/MyLocation";
import { useGeolocation } from "../customHook/useGeolocation";
import Logos from "../components/Logos";

function App() {
  const navigate = useNavigate();
  const location = useGeolocation();
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <div className="main_image">
          <div className="main_image_text">당신을 위한 캠핑</div>
          <div
            className="main_image_sub_text"
            onClick={() => {
              navigate("/camping/place/지역/경기도");
            }}
          >
            지역별로 찾아보세요!
          </div>
        </div>
        <Logos />
        {location !== 0 ? (
          <MyLocation lat={location.location.lat} lng={location.location.lng} />
        ) : null}
        <div
          className="ad-container"
          onClick={() => {
            window.open("https://www.ocamall.com/");
          }}
        >
          <div className="ad_text">캠핑 가기전에 오캠몰..!</div>
          <img className="ad_image" src={require("../img/tent.png")}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
