import { async } from "q";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function CampingList({ campingList }) {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setList(campingList);
  }, [campingList]);

  return (
    <div className="lists_container">
      {campingList.map((list, i) => {
        console.log(list.firstImageUrl);
        return (
          <div className="list_item" key={i}>
            <div
              className="camping_image"
              style={{
                background: `url(${list.firstImageUrl}) no-repeat center/cover `,
              }}
              onClick={() => {
                navigate(`/campingDetail/${list.contentId}`, {
                  state: list,
                });
              }}
            >
              <div className="camping_text">
                <div className="camping_name">{list.facltNm}</div>
                <div className="camping_address">{list.addr1}</div>
                <div className="camping_address">{list.operPdCl}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CampingList;
