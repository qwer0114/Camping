function Facility({ facilityName, facilityObjectName }) {
  return (
    <div>
      {facilityName.map((facility, i) => {
        return (
          <div key={i} className="facility_icon">
            {facilityObjectName[facility]}
            <div>{facility}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Facility;
