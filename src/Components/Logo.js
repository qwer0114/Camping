import { useNavigate } from "react-router-dom";
function Logo({ path, title, onClickEvent, navigatePath }) {
  console.log(onClickEvent);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={() => {
        onClickEvent(`camping/${navigatePath}`);
      }}
    >
      <img
        src={require(`../img/navIcons/${path}.png`)}
        alt="Image"
        className="main_icon"
        style={{ paddingBottom: "10px" }}
      ></img>
      <div style={{ cursor: "pointer" }}>{title}</div>
    </div>
  );
}

export default Logo;
