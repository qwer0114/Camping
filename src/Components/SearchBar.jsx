import { useState } from "react";
import { useNavigate } from "react-router";

function SearchBar() {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  function onEnter(e) {
    if (e.code === "Enter") {
      navigate(`/camping/search/${e.target.value}`);
      return false; // 추가적인 이벤트 실행을 방지하기 위해 false 리턴
    } else {
      return true;
    }
  }
  return (
    <div className="searchBar">
      <input
        className="search"
        placeholder="원하는 캠핑장을 찾아보세요!"
        onKeyDown={(e) => {
          onEnter(e);
        }}
      ></input>

      <img
        alt="magnifier"
        src={require(`../img/navIcons/magnifier.png`)}
        className="searchBar_icon"
      ></img>
    </div>
  );
}

export default SearchBar;
