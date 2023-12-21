import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Carousel from "../components/Carousel";
import Facility from "../components/Facility";
import Map from "../components/Map";
import NavBar from "../components/NavBar";
import { useCampingImage } from "../CustomHook/api/useCampingImage";

function CampingDetail() {
  const { state } = useLocation();
  const [images, setImages] = useState([]);
  const [facilities, setFacilities] = useState([]);

  const { data, error } = useCampingImage(state);
  console.log(data);

  useEffect(() => {
    let arr = [
      ...state.sbrsCl.split(","),
      ...state.glampInnerFclty.split(","),
      ...state.caravInnerFclty.split(","),
    ];
    let filter = arr.filter((arr) => {
      return arr !== "";
    });

    setFacilities([...new Set(filter)]);
  }, []);

  useEffect(() => {
    if (data) setImages([...data]);
  }, [data]);

  return (
    <>
      <NavBar content={"지역별"}></NavBar>
      <div className="detail">
        <div className="faclNm">{state.facltNm}</div>
        <div className="camping_address">{state.induty}</div>

        {images?.length !== 0 ? (
          <Carousel
            items={data}
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
              onClick={(e) => {
                window.open(state.homepage);
              }}
            >
              {state.homepage !== "" ? `${state.homepage}` : null}
            </span>
          </div>
        </div>
        <Map lat={state.mapY} lng={state.mapX}></Map>
      </div>
    </>
  );
}

export default CampingDetail;
