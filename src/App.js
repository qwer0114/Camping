import "./App.css";
import NavBar from "./Components/NavBar";
import data from "./data";
import { useNavigate } from "react-router-dom";
import CampingCarousel from "./Components/CampingCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainSun } from "@fortawesome/free-solid-svg-icons";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar content={"지역별"}></NavBar>
      <div className="App">
        <div className="main_image">
          <div className="main_image_text">당신을 위한 캠핑</div>
          <div
            className="main_image_sub_text"
            onClick={() => {
              navigate("/camping/경기도");
            }}
          >
            지역별로 찾아보세요!
          </div>
        </div>

        <div className="camping_carousel">
          <CampingCarousel keyword={"계곡"}></CampingCarousel>
          <CampingCarousel keyword={"바다"}></CampingCarousel>
          <CampingCarousel keyword={"산"}></CampingCarousel>
        </div>
      </div>
    </>
  );
}

export default App;
