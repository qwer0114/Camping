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
      {list.map((list, i) => {
        return (
          <div className="list_item" key={i}>
            <img src={`${list.firstImageUrl}`} className="camping_image"></img>
            <div
              className="camping_name"
              onClick={() => {
                navigate(`/campingDetail/${list.contentId}`, { state: list });
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
