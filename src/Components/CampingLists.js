import { async } from "q";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function CampingList({ campingList }) {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setList(campingList.filter((list) => list.firstImageUrl !== ""));
  }, [campingList]);
  console.log(list);
  return (
    <div className="lists_container">
      {list.map((list) => {
        return (
          <div className="list_item">
            <img src={`${list.firstImageUrl}`} className="camping_image"></img>
            <div
              className="camping_name"
              onClick={() => {
                navigate(`/camping/${list.contentId}`, { state: list });
              }}
            >
              {list.facltNm}
            </div>
            <div className="camping_address">{list.addr1}</div>
            <div className="camping_address">{list.operPdCl}</div>
          </div>
        );
      })}
    </div>
  );
}

export default CampingList;
