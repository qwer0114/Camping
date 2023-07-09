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

const facility = {
  전기: "전기",
  무선인터넷: "와이파이",
  장작판매: "장작",
  온수: "온수",
  운동시설: "운동",
  침대: "침대",
  TV: "TV",
  에어컨: "에어컨",
  냉장고: "냉장고",
  유무선인터넷: "와이파이",
  난방기구: "난방",
  취사도구: "취사",
  내부화장실: "화장실",
  물놀이장: "물놀이",
  트렘폴린: "트렘폴린",
  놀이터: "놀이터",
  편의점: "편의점",
  산책로: "산책로",
};
function Facility({ facilities }) {
  console.log(facilities);
  facilities.filter(() => {});
  return (
    <div className="facility_container">
      {facilities.map((facilityItem, i) => {
        return (
          <div key={i} className="facility_icons">
            {facilityItem === "마트.편의점" ? (
              <img
                className="facility_icon"
                src={require(`../img/facilityIcons/${facility["편의점"]}.png`)}
              ></img>
            ) : (
              <img
                className="facility_icon"
                src={require(`../img/facilityIcons/${facility[facilityItem]}.png`)}
              ></img>
            )}
            <div className="facility_name">{facilityItem}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Facility;
