import { useEffect, useState } from "react";
import { facility } from "../data";
import CheckBoxItem from "./CheckBoxItem";

function DetailFilter({ checkValue, setCheckValue }) {
  const [checkedValue, setCheckedValue] = useState([]);
  return (
    <div className="detail_filter">
      <div className="detail_filter_buttons">
        <strong style={{ fontSize: "25px" }}>상세조건</strong>
        <div>
          <button
            className="clear"
            onClick={() => {
              window.location.reload();
            }}
          >
            초기화
          </button>{" "}
          <button
            className="apply"
            onClick={() => {
              setCheckValue(checkedValue);
            }}
          >
            적용
          </button>
        </div>
      </div>
      <strong style={{ color: "rgba(0,0,0,0.7)" }}>공용시설</strong>
      <div className="detail_filter_publicFac">
        {Object.values(facility).map((fac, i) => {
          return (
            <CheckBoxItem
              i={i}
              fac={fac}
              key={i}
              checkValue={checkedValue}
              setCheckValue={setCheckedValue}
            ></CheckBoxItem>
          );
        })}
      </div>
    </div>
  );
}

export default DetailFilter;
