import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import CampingLists from "../components/CampingLists";
import MoonLoader from "react-spinners/ClipLoader";
import { useState } from "react";
import DetailFilter from "../components/DetailFilter";
import { useTemaCamping } from "../CustomHook/api/useTemaCamping";

function TemaCamping() {
  const { id } = useParams();
  const [checkValue, setCheckValue] = useState([]);
  const { data, isLoading } = useTemaCamping(id);

  console.log(data);

  return (
    <div className="camping-page">
      <NavBar></NavBar>
      {isLoading === true ? (
        <MoonLoader color="#36d7b7"></MoonLoader>
      ) : (
        <>
          <div className="fiter_bar">
            <DetailFilter setCheckValue={setCheckValue}></DetailFilter>
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

export default TemaCamping;
