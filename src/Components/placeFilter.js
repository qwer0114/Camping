import { useState } from "react";
import { useNavigate } from "react-router";

function PlaceFilter({ navigate, places }) {
  const [modal, setModal] = useState(false);
  const [initialValue, setInitialValue] = useState(`${places[0]}`);

  return (
    <div>
      <div
        onClick={() => {
          setModal(!modal);
        }}
      >
        {initialValue}
      </div>
      <ul>
        {places.map((place) => {
          return (
            <li
              onClick={(e) => {
                setInitialValue(e.target.textContent);
                navigate(`/camping/place/지역/${e.target.textContent}`);
              }}
            >
              {place}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PlaceFilter;
