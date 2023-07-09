import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Carousel from "./Carousel";
import Facility from "./Facility";

import Map from "./Map";
import NavBar from "./NavBar";
function CampingDetail() {
  const { state } = useLocation();
  const [images, setImages] = useState([]);
  const [facilities, setFacilities] = useState([]);

  console.log(state);

  const getList = async () => {
    const imageLists = await fetch(
      `/B551011/GoCamping/imageList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${state.contentId}&_type=json`
    );
    const json = await imageLists.json();
    setImages(json.response.body.items.item);
  };

  useEffect(() => {
    getList();
    let arr = [
      ...state.sbrsCl.split(","),
      ...state.glampInnerFclty.split(","),
      ...state.caravInnerFclty.split(","),
    ];
    let filter = arr.filter((arr) => {
      return arr !== "";
    });
    console.log(filter);
    setFacilities([...new Set(filter)]);
  }, []);

  return (
    <>
      <NavBar content={"지역별"}></NavBar>
      <div className="detail">
        <div className="faclNm">{state.facltNm}</div>
        <div className="camping_address">{state.induty}</div>

        {images.length !== 0 ? (
          <Carousel
            items={images}
            width="100%"
            height="550px"
            slidesToShow="1"
            url="item.imageUrl"
          ></Carousel>
        ) : null}

        <div>
          <div className="detail_Lineintro">
            {state.lineIntro !== "" ? state.lineIntro : state.facltNm}
          </div>
          <div className="detail_intro">
            {state.intro !== "" ? state.intro : state.featureNm}
          </div>
          <div className="detail_facility">
            <div className="facility_tag">숙소 편의 시설</div>
            <div style={{ display: "flex" }}>
              <Facility facilities={facilities}></Facility>
            </div>
          </div>
          <div>{state.tel !== " " ? `Tel: ${state.tel}` : null}</div>
          <div
            className="detail_road"
            onClick={() => {
              window.open(
                `https://map.kakao.com/link/to/${state.facltNm},${state.mapY},${state.mapX}`
              );
            }}
          >
            길찾기: {state.addr1}
          </div>
          <div>
            <span
              className="detail_link"
              onClick={() => {
                window.open(`${state.homepage}`);
              }}
            >
              {state.homepage !== "" ? `홈페이지: ${state.homepage}` : null}
            </span>
          </div>
        </div>
        <Map lat={state.mapY} lng={state.mapX}></Map>
      </div>
    </>
  );
}

export default CampingDetail;
