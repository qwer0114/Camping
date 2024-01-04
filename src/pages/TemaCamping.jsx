import NavBar from "../components/header/NavBar";
import { useParams } from "react-router-dom";
import CampingLists from "../components/CampingLists";
import MoonLoader from "react-spinners/ClipLoader";
import Modal from "../components/modal/Modal";
import { useEffect, useState } from "react";
import { useTemaCamping } from "../customHook/api/useTemaCamping";
import useModal from "../customHook/useModal";
import Filter from "../components/modal/Filter";
import DetailFilter from "../components/filter/DetailFilter";
import filter from "../img/filter.png";

function TemaCamping() {
  const { id } = useParams();
  const { visibility, openModal, closeModal } = useModal();
  const [checkValue, setCheckValue] = useState([]);
  const { data, isLoading } = useTemaCamping(id);

  useEffect(() => {
    if (visibility) document.querySelector("body").style.overflow = "hidden";
    else document.querySelector("body").style.overflow = "auto";
  }, [visibility]);

  return (
    <>
      <div className={visibility ? "scroll_locked" : "camping_page"}>
        {visibility ? null : <NavBar></NavBar>}
        {isLoading === true ? (
          <MoonLoader color="#36d7b7"></MoonLoader>
        ) : (
          <>
            <div className="camping_lists">
              <div className="fiter_bar">
                <DetailFilter
                  setCheckValue={setCheckValue}
                  visibility={visibility}
                ></DetailFilter>
              </div>
              <button
                type="button"
                onClick={openModal}
                className="filter_button"
              >
                <img
                  alt="필터 이미지"
                  className="filter_image"
                  src={filter}
                ></img>
              </button>
              <CampingLists
                campingList={data}
                checkValue={checkValue}
              ></CampingLists>
            </div>
          </>
        )}
      </div>
      <Modal closeModal={closeModal} visibility={visibility}>
        <Filter
          checkValue={checkValue}
          setCheckValue={setCheckValue}
          closeModal={closeModal}
        />
      </Modal>
    </>
  );
}

export default TemaCamping;
