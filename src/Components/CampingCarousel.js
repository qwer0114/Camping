import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

import Carousel from "./Carousel";
import data from "../data";

function CampingCarousel({ keyword }) {
  const [campingList, setCampingList] = useState([]);

  const queryClient = useQueryClient();

  const getList = async () => {
    const list = await fetch(
      `/B551011/GoCamping/searchList?serviceKey=${process.env.REACT_APP_API_KEY}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=Hello&keyword=${keyword}&_type=json`
    );
    const json = await list.json();
    return json;
  };

  const result = useQuery(["getTemaList", keyword], getList, {
    onError: (e) => {
      console.log(e.message);
    },
    select: (data) => {
      const filterData = data.response.body.items.item.filter(
        (list) => list.firstImageUrl !== ""
      );
      return filterData;
    },
    staleTime: 1000 * 60 * 60 * 24,
    cacheTime: 1000 * 60 * 60 * 24,
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  return (
    <div>
      <div className="keyword">#{keyword}으로 떠나요</div>
      {result.isSuccess === true ? (
        <Carousel
          items={result.data}
          width="90%"
          height="200px"
          slidesToShow="5"
          url="item.firstImageurl"
        ></Carousel>
      ) : null}
    </div>
  );
}

export default CampingCarousel;
