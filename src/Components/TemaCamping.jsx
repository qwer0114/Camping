import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import CampingLists from "./CampingLists";
import MoonLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import DetailFilter from "./DetailFilter";
import { useAPI } from "../CustomHook/useAPI";
import useFetch from "../CustomHook/useFetch";

function TemaCamping() {
  const { id } = useParams();
  const [checkValue, setCheckValue] = useState([]);
  const queryClient = useQueryClient();
  const getList = useFetch(
    `/B551011/GoCamping/searchList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=Hello&keyword=${id}&_type=json`
  );

  const result = useAPI(["getLoationList", id], getList);

  return (
    <div className="camping-page">
      <NavBar></NavBar>
      {result.isLoading === true ? (
        <MoonLoader color="#36d7b7"></MoonLoader>
      ) : (
        <>
          <div className="fiter_bar">
            <DetailFilter setCheckValue={setCheckValue}></DetailFilter>
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

export default TemaCamping;