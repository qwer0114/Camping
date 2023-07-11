import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import CampingLists from "./CampingLists";
import MoonLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import DetailFilter from "./DetailFilter";

const navPlace = [
  "전국",
  "경기/인천",
  "충청",
  "경상/부산",
  "전라",
  "강원",
  "제주",
];

function TemaCamping() {
  const { id } = useParams();
  const [checkValue, setCheckValue] = useState([]);
  const queryClient = useQueryClient();
  const [filterDN, setFilterDN] = useState(["전국"]);

  const getList = async () => {
    const list = await fetch(
      `/B551011/GoCamping/searchList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=Hello&keyword=${id}&_type=json`
    );
    const json = await list.json();
    return json;
  };

  const result = useQuery(["getTemaList", id], getList, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (e) => {
      console.log(e.message);
    },
    select: (data) => {
      let filterData;
      if (filterDN[0] === "전국") {
        filterData = data.response.body.items.item.filter(
          (list) => list.firstImageUrl !== ""
        );
      } else {
        filterData = data.response.body.items.item.filter(
          (list) =>
            list.firstImageUrl !== "" &&
            (list.doNm.includes(filterDN[0]) ||
              list.doNm.includes(filterDN[filterDN.length - 1]))
        );
      }

      return filterData;
    },

    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    console.log(filterDN);
  }, [filterDN]);
  return (
    <>
      <NavBar id={id} navPlace={navPlace}></NavBar>
      <div className="camping-page">
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
    </>
  );
}

export default TemaCamping;
