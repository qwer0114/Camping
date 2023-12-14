import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { places } from "../data";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
function PlaceFilter({ id, queryFn }) {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  return (
    <div className="place_filter">
      <div
        className="place_filter_title"
        onClick={() => {
          setModal(!modal);
        }}
      >
        {id}
        <FontAwesomeIcon icon={faChevronDown} className="arrow_down" />
      </div>
      {modal === true ? (
        <div className="place_filter_items">
          {places.map((place, i) => {
            return (
              <div
                key={i}
                className="place_filter_item"
                onClick={(e) => {
                  navigate(`/camping/place/지역/${e.target.textContent}`);
                  setModal(false);
                }}
              >
                {id === place ? (
                  <span style={{ color: "black", fontWeight: "700" }}>
                    {place}
                  </span>
                ) : (
                  <span>{place}</span>
                )}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default PlaceFilter;
