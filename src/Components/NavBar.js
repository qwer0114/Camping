import { useNavigate } from "react-router";

function NavBar({ content }) {
  const navigate = useNavigate();
  return (
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
    </div>
  );
}

export default NavBar;
