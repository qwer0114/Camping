import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Carousel from "./Carousel";
import Facility from "./Facility";
import {
  faBolt,
  faWifi,
  faTree,
  faWorm,
  faStore,
  faBed,
  faTv,
  faTemperatureArrowDown,
  faSnowflake,
  faNetworkWired,
  faTemperatureArrowUp,
  faDumbbell,
  faUtensils,
  faToilet,
  faPersonSwimming,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Map from "./Map";
import NavBar from "./NavBar";
function CampingDetail() {
  const { state } = useLocation();
  const [images, setImages] = useState([]);
  const [sbrsCl, setsbrsCl] = useState([]);
  const [glampInnerFclty, setglampInnerFclty] = useState([]);
  const [caravInnerFclty, setcaravInnerFclty] = useState([]);

  const facility = {
    전기: <FontAwesomeIcon icon={faBolt} size="2x" />,
    무선인터넷: <FontAwesomeIcon icon={faWifi} size="2x" />,
    장작판매: <FontAwesomeIcon icon={faTree} size="2x" />,
    온수: <FontAwesomeIcon icon={faWorm} size="2x" />,
    편의점: <FontAwesomeIcon icon={faStore} size="2x" />,
    운동시설: <FontAwesomeIcon icon={faDumbbell} size="2x" />,
    침대: <FontAwesomeIcon icon={faBed} size="2x" />,
    TV: <FontAwesomeIcon icon={faTv} size="2x" />,
    에어컨: <FontAwesomeIcon icon={faTemperatureArrowDown} size="2x" />,
    냉장고: <FontAwesomeIcon icon={faSnowflake} size="2x" />,
    유무선인터넷: <FontAwesomeIcon icon={faNetworkWired} size="2x" />,
    난방기구: <FontAwesomeIcon icon={faTemperatureArrowUp} size="2x" />,
    운동시설: <FontAwesomeIcon icon={faDumbbell} size="2x" />,
    취사도구: <FontAwesomeIcon icon={faUtensils} size="2x" />,
    내부화장실: <FontAwesomeIcon icon={faToilet} size="2x" />,
    물놀이장: <FontAwesomeIcon icon={faPersonSwimming} size="2x" />,
  };

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
    setsbrsCl(state.sbrsCl.split(","));
    setglampInnerFclty(state.glampInnerFclty.split(","));
    setcaravInnerFclty(state.caravInnerFclty.split(","));
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
              <Facility
                facilityName={sbrsCl}
                facilityObjectName={facility}
              ></Facility>

              <Facility
                facilityName={glampInnerFclty}
                facilityObjectName={facility}
              ></Facility>

              <Facility
                facilityName={caravInnerFclty}
                facilityObjectName={facility}
              ></Facility>
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
            길찾기
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
