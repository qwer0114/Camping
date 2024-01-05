import Carousel from "./Carousel";
import { useLocationCamping } from "../customHook/api/useLocationCamping";

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
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

  return (
    <div className="myLocation">
      <div className="location_camping">
        <div> 내 주변의 캠핑장 </div>
        <img src={require("../img/gps.png")} className="gps" alt="gps"></img>
      </div>
      {data ? (
        <Carousel
          items={data}
          className={"myLocation_carousel"}
          height="150px"
          slidesToShow="4"
          responsive={responsive}
        ></Carousel>
      ) : null}
    </div>
  );
}

export default MyLocation;
