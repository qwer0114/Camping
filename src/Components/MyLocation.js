import { useQuery, useQueryClient } from "react-query";
import { useGeolocation } from "../CustomHook/useGeolocation";
import { useEffect, useState } from "react";
import { useAPI } from "../CustomHook/useAPI";
import Carousel from "./Carousel";

function MyLocation() {
  const location = useGeolocation();
  const [campingList, setCampingList] = useState([]);

  const getList = async () => {
    const list = await fetch(
      `/B551011/GoCamping/locationBasedList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=Hello&mapX=${location.location.lng}&mapY=${location.location.lat}&radius=20000&_type=json`
    );
    const json = await list.json();
    const filterData = json.response.body.items.item.filter(
      (list) => list.firstImageUrl !== ""
    );
    setCampingList(filterData);
  };
  console.log(campingList);

  useEffect(() => {
    if (location.location.lat !== 0) {
      // useEffect을 사용해서 조건문으로 거르는 이유는 최조의 lat값이 0이 들어와 api 호출시 아무값도 나오지 않음
      getList();
    }
  }, [location]);

  return (
    <div>
      {campingList.length !== 0 ? (
        <Carousel
          items={campingList}
          width="90%"
          height="150px"
          slidesToShow="5"
        ></Carousel>
      ) : null}
    </div>
  );
}

export default MyLocation;
