import { useNavigate } from "react-router";

import SearchBar from "./SearchBar";
function NavBar({ pageTitle, navPlace }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="navBar">
        <div className="nav">
          <img
            src={require("../img/logo.png")}
            alt=""
            className="site_logo"
            onClick={() => {
              navigate("/");
            }}
          ></img>
          <SearchBar></SearchBar>
          <div className="nav_phrase">당신을 위한 캠핑</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
