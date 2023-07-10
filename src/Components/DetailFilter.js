import { facility } from "../data";

function DetailFilter() {
  let count = 1;
  return (
    <div className="detail_filter">
      <div className="detail_filter_buttons">
        <strong style={{ fontSize: "25px" }}>상세조건</strong>
        <div>
          <button className="clear">초기화</button>{" "}
          <button className="apply">적용</button>
        </div>
      </div>
      <strong style={{ color: "rgba(0,0,0,0.7)" }}>공용시설</strong>
      <div className="detail_filter_publicFac">
        {Object.values(facility).map((fac) => {
          count++;
          return (
            <div>
              {" "}
              <input type="checkBox" id={`fac${count}`}></input>{" "}
              <label for={`fac${count}`}>{fac}</label>
            </div>
          );
        })}
      </div>
      <div>
        <strong>애완동물</strong>
        <div>
          {" "}
          <input type="checkBox" id={`possilbe`}></input>{" "}
          <label for={`possilbe`}>가능</label>
          <input type="checkBox" id={`impossilbe`}></input>{" "}
          <label for={`impossilbe`} checked={false}>
            불가능
          </label>
        </div>
      </div>
    </div>
  );
}

export default DetailFilter;
