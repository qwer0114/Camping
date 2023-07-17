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
import PlaceFilter from "./PlaceFilter";
import useFetch from "../CustomHook/useFetch";
function Camping() {
  const [checkValue, setCheckValue] = useState([]);
  let { id } = useParams();

  const queryClient = useQueryClient();
  const getList = useFetch(
    `/B551011/GoCamping/locationBasedList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=Hello&mapX=${data[id].경도}&mapY=${data[id].위도}&radius=20000&_type=json`
  );

  const result = useAPI(["getLoationList", id], getList);

  const preFetchList = async (id) => {
    await queryClient.prefetchQuery({
      queryKey: ["getList", id],
      queryFn: getList,
    });
  };

  return (
    <div className="camping-page">
      <NavBar></NavBar>
      {result.isLoading === true ? (
        <MoonLoader color="#36d7b7"></MoonLoader>
      ) : (
        <>
          <div className="fiter_bar">
            <PlaceFilter id={id} preFetch={preFetchList}></PlaceFilter>
            <DetailFilter
              checkValue={checkValue}
              setCheckValue={setCheckValue}
            ></DetailFilter>
          </div>
          <CampingLists
            campingList={result.data}
            checkValue={checkValue}
          ></CampingLists>
        </>
      )}
    </div>
  );
}

export default Camping;
