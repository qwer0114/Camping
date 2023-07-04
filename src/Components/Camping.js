import { useState, useEffect } from "react";

import CampingLists from "./CampingLists";
import NavBar from "./NavBar";
import data from "../data";

function Camping() {
  const [mainPlace, setMainPlace] = useState([
    "경기도",
    "경상남도",
    "경상북도",
    "전라남도",
    "전라북도",
    "충청남도",
    "충청북도",
    "제주도",
  ]);

  const [selectPlace, setSelectPlace] = useState(data.경기도);
  const [campingList, setCampingList] = useState([]);

  const getList = async () => {
    const list = await fetch(
      `${process.env.REACT_APP_API_ADDRESS}&serviceKey=${process.env.REACT_APP_API_KEY}&_type=json&mapX=${selectPlace.경도}&mapY=${selectPlace.위도}&radius=20000`
    );
    const json = await list.json();
    setCampingList(json.response.body.items.item);
  };
  useEffect(() => {
    getList();
  }, [selectPlace]);

  return (
    <div className="camping-page">
      <NavBar></NavBar>
      <div className="sideBar">
        {mainPlace.map((place, i) => {
          return (
            <div
              key={i}
              className="sideBar_item"
              onClick={() => {
                setSelectPlace(data[place]);
              }}
            >
              {place}
            </div>
          );
        })}
      </div>
      <CampingLists campingList={campingList}></CampingLists>
    </div>
  );
}

export default Camping;
