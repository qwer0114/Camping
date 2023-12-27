import React, { useEffect, useState } from "react";
import { facility } from "../../data";
import DetailFilter from "../filter/DetailFilter";
import CheckBoxItem from "../filter/CheckBoxItem";

export default function Filter({ closeModal, checkValue, setCheckValue }) {
  const [checkedValue, setCheckedValue] = useState([...checkValue]);

  const handleClick = (e) => {
    let array = [...checkedValue];

    if (!array.includes(e.target.textContent)) {
      array.push(e.target.textContent);
      setCheckedValue([...array]);
    } else {
      array.splice(array.indexOf(e.target.textContent), 1);
      setCheckedValue([...array]);
    }
  };

  const handleSubmit = () => {
    setCheckValue([...checkedValue]);
    closeModal();
  };

  return (
    <div className="modal_filter">
      <div className="filter_bar">
        <div>필터</div>
        <button className="filter_exit" onClick={closeModal}>
          X
        </button>
      </div>
      <div className="filter_title">상세 시설</div>
      <div className="filter_button_container">
        {Object.values(facility).map((fac, i) => {
          return (
            <button
              name={fac}
              value={fac}
              onClick={(e) => {
                handleClick(e);
              }}
              className={
                "modal_filter_button " +
                (checkedValue.includes(fac) ? " active" : "")
              }
            >
              {fac}
            </button>
          );
        })}
      </div>
      <div className="submit_button_container">
        <button className="apply modal_apply" onClick={handleSubmit}>
          적용
        </button>
        <button
          className="clear modal_apply"
          onClick={() => {
            setCheckedValue([]);
          }}
        >
          초기화
        </button>
      </div>
    </div>
  );
}
