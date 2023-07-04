import "./App.css";
import NavBar from "./Components/NavBar";
import data from "./data";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <NavBar content={"지역별"}></NavBar>
      <div className="main_image">
        <div className="main_image_text">열심히 일한자 떠나라!</div>
      </div>
      <div className="cards">
        <div className="seoul_card">
          <div
            onClick={() => {
              navigate("/camping");
            }}
          >
            경기도 캠핑장
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
