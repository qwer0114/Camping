import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ImageCarousel from "./ImageCarousel";
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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Map from "./Map";
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
  };

  const glampFacility = {
    침대: <FontAwesomeIcon icon={faBed} size="2x" />,
    TV: <FontAwesomeIcon icon={faTv} size="2x" />,
    에어컨: <FontAwesomeIcon icon={faTemperatureArrowDown} size="2x" />,
    냉장고: <FontAwesomeIcon icon={faSnowflake} size="2x" />,
    유무선인터넷: <FontAwesomeIcon icon={faNetworkWired} size="2x" />,
    난방기구: <FontAwesomeIcon icon={faTemperatureArrowUp} size="2x" />,
    운동시설: <FontAwesomeIcon icon={faDumbbell} size="2x" />,
  };

  const caravanFacility = {
    침대: <FontAwesomeIcon icon={faBed} size="2x" />,
    TV: <FontAwesomeIcon icon={faTv} size="2x" />,
    에어컨: <FontAwesomeIcon icon={faTemperatureArrowDown} size="2x" />,
    냉장고: <FontAwesomeIcon icon={faSnowflake} size="2x" />,
    유무선인터넷: <FontAwesomeIcon icon={faNetworkWired} size="2x" />,
    난방기구: <FontAwesomeIcon icon={faTemperatureArrowUp} size="2x" />,
    취사도구: <FontAwesomeIcon icon={faUtensils} size="2x" />,
    내부화장실: <FontAwesomeIcon icon={faToilet} size="2x" />,
  };

  const getList = async () => {
    const imageLists = await fetch(
      `${process.env.REACT_APP_IMAGE_API_ADDRESS}&serviceKey=${process.env.REACT_APP_IMAGE_API_KEY}&_type=json&contentId=${state.contentId}`
    );
    const json = await imageLists.json();
    setImages(json.response.body.items.item);
  };

  console.log(typeof state.mapX);

  useEffect(() => {
    getList();
    setsbrsCl(state.sbrsCl.split(","));
    setglampInnerFclty(state.glampInnerFclty.split(","));
    setcaravInnerFclty(state.caravInnerFclty.split(","));
  }, []);

  console.log(sbrsCl);
  console.log(glampInnerFclty);

  return (
    <div className="detail">
      <div className="faclNm">{state.facltNm}</div>
      <div className="camping_address">{state.induty}</div>

      {images.length !== 0 ? (
        <ImageCarousel images={images}></ImageCarousel>
      ) : null}

      <div>
        <div>{state.lineIntro !== "" ? state.lineIntro : state.facltNm}</div>
        <div>{state.intro !== "" ? state.intro : state.featureNm}</div>
        <div className="detail_facility">
          <div>숙소 편의 시설</div>

          <Facility
            facilityName={sbrsCl}
            facilityObjectName={facility}
          ></Facility>

          <Facility
            facilityName={glampInnerFclty}
            facilityObjectName={glampFacility}
          ></Facility>

          <Facility
            facilityName={caravInnerFclty}
            facilityObjectName={caravanFacility}
          ></Facility>
        </div>
        <div>Tel:{state.tel}</div>
        <div>홈페이지:{state.homepage}</div>
      </div>
      <Map lat={state.mapY} lng={state.mapX}></Map>
    </div>
  );
}

export default CampingDetail;
