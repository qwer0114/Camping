import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import CampingLists from "./CampingLists";
import NavBar from "./NavBar";
import data from "../data";
import { async } from "q";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
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

  const result = useQuery(["getList", id], getList, {
    onSuccess: (data) => {},
    onError: (e) => {
      console.log(e.message);
    },
    select: (data) => {
      const filterData = data.response.body.items.item.filter(
        (list) => list.firstImageUrl !== ""
      );
      return filterData;
    },
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const preFetchList = async (id) => {
    await queryClient.prefetchQuery({
      queryKey: ["getList", id],
      queryFn: getList,
    });
  };

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
                preFetchList(id);
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
      {result.isSuccess === true ? (
        <CampingLists campingList={result.data}></CampingLists>
      ) : null}
    </div>
  );
}

export default Camping;
