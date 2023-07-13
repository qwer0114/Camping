import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import CampingLists from "./CampingLists";
import NavBar from "./NavBar";
import { data } from "../data";
import { async } from "q";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import DetailFilter from "./DetailFilter";
import MoonLoader from "react-spinners/ClipLoader";
import { useAPI } from "../CustomHook/useAPI";

function Camping() {
  const [mainPlace, setMainPlace] = useState([
    "경기도",
    "강원도",
    "경상남도",
    "경상북도",
    "전라남도",
    "전라북도",
    "충청남도",
    "충청북도",
    "제주도",
  ]);
  const [checkValue, setCheckValue] = useState([]);
  const navigate = useNavigate();
  let { id } = useParams();

  const queryClient = useQueryClient();
  const getList = async () => {
    const list = await fetch(
      `/B551011/GoCamping/locationBasedList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=Hello&mapX=${data[id].경도}&mapY=${data[id].위도}&radius=20000&_type=json`
    );
    const json = await list.json();
    return json;
  };

  const result = useAPI(["getLoationList", id], getList);

  // const preFetchList = async (id) => {
  //   await queryClient.prefetchQuery({
  //     queryKey: ["getList", id],
  //     queryFn: getList,
  //   });
  // };

  return (
    <div className="camping-page">
      <NavBar></NavBar>
      <div className="sideBar">
        {mainPlace.map((place, i) => {
          return (
            <div
              key={i}
              className="sideBar_item"
              onClick={(e) => {
                navigate(`/camping/place/지역/${e.target.textContent}`);
              }}
              onMouseEnter={() => {
                // preFetchList(id);
              }}
            >
              {id === place ? (
                <span style={{ color: "black", fontWeight: "700" }}>
                  {place}
                </span>
              ) : (
                <span>{place}</span>
              )}
            </div>
          );
        })}
      </div>
      <DetailFilter
        checkValue={checkValue}
        setCheckValue={setCheckValue}
      ></DetailFilter>
      {result.isLoading === true ? (
        <MoonLoader color="#36d7b7" />
      ) : (
        <CampingLists
          campingList={result.data}
          checkValue={checkValue}
        ></CampingLists>
      )}
    </div>
  );
}

export default Camping;
