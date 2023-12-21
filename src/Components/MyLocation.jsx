import { useGeolocation } from "../CustomHook/useGeolocation";
import Carousel from "./Carousel";
import { useLocationCamping } from "../CustomHook/api/useLocationCamping";

function MyLocation({ lng, lat }) {
  const { data } = useLocationCamping(lat, lng);

  return (
    <div>
      {data ? (
        <Carousel
          items={data}
          width="90%"
          height="150px"
          slidesToShow="5"
        ></Carousel>
      ) : null}
    </div>
  );
}

export default MyLocation;
