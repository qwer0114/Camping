import NavBar from "../components/header/NavBar";
import { useParams, useSearchParams } from "react-router-dom";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("tema");
  const { visibility, openModal, closeModal } = useModal();
  const { data, isLoading } = useTemaCamping(id);

  // useEffect(() => {
  //   if (visibility) document.querySelector("body").style.overflow = "hidden";
  //   else document.querySelector("body").style.overflow = "auto";
  // }, [visibility]);

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
                <DetailFilter visibility={visibility}></DetailFilter>
              </div>
              <button
                type="button"
                onClick={openModal}
                className="filter_button"
              >
                <img alt="필터 이미지" className="filter_image" src={filter} />
              </button>
              <CampingLists campingList={data} />
            </div>
            \
          </>
        )}
      </div>
      <Modal closeModal={closeModal} visibility={visibility}>
        <Filter closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default TemaCamping;
