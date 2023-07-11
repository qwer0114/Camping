import { useState } from "react";
import { useNavigate } from "react-router";
import Logo from "./Logo";
function NavBar({ pageTitle, navPlace }) {
  const navigate = useNavigate();
  const [rootPage, setRootPage] = useState(true);
  const [navModal, setNavModal] = useState(false);
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

          <div className="nav_phrase">당신을 위한 캠핑</div>
        </div>

        <div className="nav_pageTitle">{pageTitle}</div>
      </div>
    </>
  );
}

export default NavBar;
