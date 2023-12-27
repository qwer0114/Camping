import { useState, useEffect } from "react";
import CampingLists from "../components/CampingLists";
import NavBar from "../components/NavBar";
import { location } from "../data";
import { useParams } from "react-router-dom";
import DetailFilter from "../components/DetailFilter";
import MoonLoader from "react-spinners/ClipLoader";
import PlaceFilter from "../components/PlaceFilter";
import { useLocationCamping } from "../CustomHook/api/useLocationCamping";
import useModal from "../CustomHook/useModal";
import filter from "../img/filter.png";
import Modal from "../components/modal/Modal";
import Filter from "../components/modal/Filter";
function Camping() {
  const [checkValue, setCheckValue] = useState([]);
  let { id } = useParams();
  const { visibility, openModal, closeModal } = useModal();
  const { data, isLoading } = useLocationCamping(
    location[id].위도,
    location[id].경도
  );
  useEffect(() => {
    if (visibility) document.querySelector("body").style.overflow = "hidden";
    else document.querySelector("body").style.overflow = "auto";
  }, [visibility]);

  return (
    <div className={visibility ? "scroll_locked" : "camping_page"}>
      {visibility ? null : <NavBar></NavBar>}
      {isLoading === true ? (
        <MoonLoader color="#36d7b7"></MoonLoader>
      ) : (
        <div className="camping_lists">
          <div className="fiter_bar">
            <PlaceFilter id={id}></PlaceFilter>
            <DetailFilter
              checkValue={checkValue}
              setCheckValue={setCheckValue}
            ></DetailFilter>
            <button type="button" onClick={openModal} className="filter_button">
              <img alt="필터 이미지" className="filter_image" src={filter} />
            </button>
          </div>
          <CampingLists
            campingList={data}
            checkValue={checkValue}
          ></CampingLists>
        </div>
      )}
      <Modal closeModal={closeModal} visibility={visibility}>
        <Filter
          checkValue={checkValue}
          setCheckValue={setCheckValue}
          closeModal={closeModal}
        />
      </Modal>
    </div>
  );
}

export default Camping;
