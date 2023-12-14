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
      {modal === false ? (
        <img
          src={require(`../img/navIcons/magnifier.png`)}
          className="searchBar_icon"
          onClick={() => {
            setModal(!modal);
          }}
        ></img>
      ) : (
        <span
          onClick={() => {
            setModal(!modal);
          }}
        >
          X
        </span>
      )}
      {modal !== false ? (
        <div className="search_modal">
          <ul className="recommend_search">
            <li>추천검색어</li>
            <li>계곡</li>
            <li>바다</li>
            <li>글램핑</li>
            <li>카라반</li>
            <li>남해</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
