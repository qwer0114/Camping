import NavBar from "../Components/header/NavBar";
import { useNavigate } from "react-router-dom";
import MyLocation from "../Components/MyLocation";
import { useGeolocation } from "../CustomHook/useGeolocation";
import Logo from "../Components/Logo";

function App() {
  const navigate = useNavigate();
  const location = useGeolocation();
  return (
    <div className="App">
      <NavBar content={"지역별"}></NavBar>
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
        <div className="main_icons">
          <div className="main_icon_group">
            <Logo
              path={"icon-mountain"}
              title={"산"}
              onClickEvent={navigate}
              navigatePath={"search/산"}
            ></Logo>
            <Logo
              path={"icon-sea"}
              title={"바다"}
              onClickEvent={navigate}
              navigatePath={"search/바다"}
            ></Logo>
            <Logo
              path={"icon-river"}
              title={"계곡"}
              onClickEvent={navigate}
              navigatePath={"search/계곡"}
            ></Logo>
          </div>
          <div className="main_icon_group">
            <Logo
              path={"icon-camping"}
              title={"글램핑"}
              onClickEvent={navigate}
              navigatePath={"search/글램핑"}
            ></Logo>
            <Logo
              path={"icon-carvan"}
              title={"카라반"}
              onClickEvent={navigate}
              navigatePath={"search/카라반"}
            ></Logo>
            <Logo
              path={"icon-korea"}
              title={"지역"}
              onClickEvent={navigate}
              navigatePath={"place/지역/경기도"}
            ></Logo>
          </div>
        </div>
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
