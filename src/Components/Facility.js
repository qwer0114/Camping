function Facility({ facilityName, facilityObjectName }) {
  return (
    <div className="facility_container">
      {facilityName.map((facility, i) => {
        return (
          <div key={i} className="facility_icons">
            <div className="facility_icon">{facilityObjectName[facility]}</div>
            <div className="facility_name">{facility}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Facility;
