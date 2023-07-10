import { facility } from "../data";
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
