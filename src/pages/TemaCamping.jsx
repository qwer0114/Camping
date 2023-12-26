import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import CampingLists from "../components/CampingLists";
import MoonLoader from "react-spinners/ClipLoader";
import Modal from "../components/modal/Modal";
import { useState } from "react";
import { useTemaCamping } from "../CustomHook/api/useTemaCamping";
import useModal from "../CustomHook/useModal";
import Filter from "../components/modal/Filter";
import DetailFilter from "../components/DetailFilter";
import filter from "../img/filter.png";
function TemaCamping() {
  const { id } = useParams();
  const { visibility, openModal, closeModal } = useModal();
  const [checkValue, setCheckValue] = useState([]);
  const { data, isLoading } = useTemaCamping(id);

  console.log(visibility);

  return (
    <>
      <div className="camping-page">
        <NavBar></NavBar>
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
        <Filter closeModal={closeModal} />
      </Modal>
    </>
  );
}

export default TemaCamping;
