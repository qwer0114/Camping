import { useGeolocation } from "../CustomHook/useGeolocation";
import Carousel from "./Carousel";
import { useLocationCamping } from "../CustomHook/api/useLocationCamping";
import { useEffect, useState } from "react";
function MyLocation({ lng, lat }) {
  const { data } = useLocationCamping(lat, lng);

  const responsive = [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="myLocation">
      <div className="location_camping">
        <div> 내 주변의 캠핑장 </div>
        <img src={require("../img/gps.png")} className="gps"></img>
      </div>
      {data ? (
        <Carousel
          items={data}
          width={width > 480 ? "95%" : "100%"}
          height="150px"
          slidesToShow="4"
          responsive={responsive}
        ></Carousel>
      ) : null}
    </div>
  );
}

export default MyLocation;
