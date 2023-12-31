import { useEffect, useState } from "react";
import { facility } from "../../data";
import CheckBoxItem from "./CheckBoxItem";

function DetailFilter({ setCheckValue, visibility }) {
  const [checkedValue, setCheckedValue] = useState([]); // 체크 리스트를 한번에 적용하기 위해 state 한번더 사용 아니면 적용 버튼 안눌러도 체크리스트 클릭 즉시 캠핑장 변경됨

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
          </button>
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
              checkValue={checkedValue}
              key={i}
              setCheckValue={setCheckedValue}
            ></CheckBoxItem>
          );
        })}
      </div>
    </div>
  );
}

export default DetailFilter;
