import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import CampingLists from "../components/CampingLists";
import NavBar from "../components/NavBar";
import { location } from "../data";
import { useParams } from "react-router-dom";
import DetailFilter from "../components/DetailFilter";
import MoonLoader from "react-spinners/ClipLoader";
import PlaceFilter from "../components/PlaceFilter";
import { useLocationCamping } from "../CustomHook/api/useLocationCamping";
function Camping() {
  const [checkValue, setCheckValue] = useState([]);
  let { id } = useParams();

  const { data, isLoading } = useLocationCamping(
    location[id].위도,
    location[id].경도
  );
  console.log(data);
  return (
    <div className="camping-page">
      <NavBar></NavBar>
      {isLoading === true ? (
        <MoonLoader color="#36d7b7"></MoonLoader>
      ) : (
        <>
          <div className="fiter_bar">
            <PlaceFilter id={id}></PlaceFilter>
            <DetailFilter
              checkValue={checkValue}
              setCheckValue={setCheckValue}
            ></DetailFilter>
          </div>
          <CampingLists
            campingList={data}
            checkValue={checkValue}
          ></CampingLists>
        </>
      )}
    </div>
  );
}

export default Camping;
