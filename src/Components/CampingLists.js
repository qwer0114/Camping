import { async } from "q";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function CampingList({ campingList, checkValue }) {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (checkValue.length === 0) {
      setList(campingList);
    } else {
      let filterList = campingList.filter((campinglist) => {
        return checkValue.every((checkValue) => {
          // evry는 배열의 모든 원소가 조건에 맞는지 검사하는 메서드
          return (
            campinglist.sbrsCl.includes(checkValue) || // sbrsCl안에 checkValue 가 있으면 반환 그 camplist 반환
            campinglist.glampInnerFclty.includes(checkValue) || // sbrsCl안에 glampInnerFclty 가 있으면 그 camplist 반환
            campinglist.caravInnerFclty.includes(checkValue) // sbrsCl안에 caravInnerFclty 가 있으면 반환 그 camplist 반환
          );
        });
      });
      setList(filterList);
    }
  }, [checkValue]);

  useEffect(() => {
    setList(campingList);
  }, [campingList]);

  return (
    <div className="lists_container">
      {list.map((list, i) => {
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
