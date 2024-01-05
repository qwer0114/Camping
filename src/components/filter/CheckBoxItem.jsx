import { useEffect, useState } from "react";

const checkedValues = (isChecked, fac, checkedValue, setCheckedValue) => {
  if (isChecked === true) {
    let arr = [];
    arr.push(fac);
    setCheckedValue([...arr, ...checkedValue]);
  } else if (isChecked === false) {
    const filterValeus = checkedValue.filter((arr) => arr !== fac);
    setCheckedValue([...filterValeus]);
  }
};

function CheckBoxItem({ i, fac, checkValue, setCheckValue }) {
  const isChecked = checkValue.includes(fac);

  return (
    <div key={i}>
      <input
        type="checkBox"
        id={`fac${i}`}
        onChange={(e) => {
          checkedValues(e.target.checked, fac, checkValue, setCheckValue);
        }}
        checked={isChecked}
      ></input>
      <label htmlFor={`fac${i}`}>{fac}</label>
    </div>
  );
}

export default CheckBoxItem;
