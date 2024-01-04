import { useNavigate } from "react-router-dom";
function Logo({ path, title, onClickEvent, navigatePath }) {
  return (
    <div
      className="icon"
      onClick={() => {
        onClickEvent(`camping/${navigatePath}`);
      }}
    >
      <img
        src={require(`../img/navIcons/${path}.png`)}
        alt="Image"
        className="main_icon_image"
        style={{ paddingBottom: "10px" }}
      ></img>
      <div className="main_icon_title" style={{ cursor: "pointer" }}>
        {title}
      </div>
    </div>
  );
}

export default Logo;
