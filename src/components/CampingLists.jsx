import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useInView } from "react-intersection-observer";
import CampingPlace from "./CampingPlace";
import filter from "../utility/filter";
import { useSearchParams } from "react-router-dom";
function CampingList({ campingList }) {
  const [searchParams, setSearchParams] = useSearchParams();
  let checkValue = searchParams.get("theme")?.split(",");
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      console.log("바닥!");
    }
  }, [inView]);

  useEffect(() => {
    if (!checkValue) {
      setList(campingList);
    } else {
      console.log(checkValue);
      let filterList = filter(campingList, checkValue);
      setList(filterList);
    }
  }, [searchParams]);

  return (
    <div className="lists_container">
      {list === undefined || list.length === 0 ? (
        <h1>존재하지 않습니다!</h1>
      ) : (
        <>
          {list.map((list) => (
            <CampingPlace list={list} key={list.contentId} />
          ))}
          <div ref={ref} style={{ height: 50 }} />
        </>
      )}
    </div>
  );
}

export default CampingList;
