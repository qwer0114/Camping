import { useEffect, useState } from "react";

const checkedValues = (isChecked, fac, checkValue, setCheckValue) => {
  // 체크 메뉴 거르는 함수
  if (isChecked === true) {
    // 체크를 누르면 아이템 추가
    let arr = [];
    arr.push(fac);
    setCheckValue([...arr, ...checkValue]);
  } else if (isChecked === false) {
    const fitlerValues = checkValue.filter((arr) => arr !== fac); // 체크를 눌렀다 해체했을 시 기존 눌러서 추가됐던 아이템 삭제
    setCheckValue([...fitlerValues]);
  }
};

function CheckBoxItem({ i, fac, checkValue, setCheckValue }) {
  useEffect(() => {}, []);
  return (
    <div key={i}>
      <input
        type="checkBox"
        id={`fac${i}`}
        onChange={(e) => {
          checkedValues(e.target.checked, fac, checkValue, setCheckValue);
        }}
      ></input>
      <label htmlFor={`fac${i}`}>{fac}</label>
    </div>
  );
}

export default CheckBoxItem;
