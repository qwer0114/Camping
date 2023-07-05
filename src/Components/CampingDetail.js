import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ImageCarousel from "./ImageCarousel";

function CampingDetail() {
  const { state } = useLocation();
  const [images, setImages] = useState([]);
  console.log(state);

  const getList = async () => {
    const imageLists = await fetch(
      `${process.env.REACT_APP_IMAGE_API_ADDRESS}&serviceKey=${process.env.REACT_APP_IMAGE_API_KEY}&_type=json&contentId=${state.contentId}`
    );
    const json = await imageLists.json();
    setImages(json.response.body.items.item);
    // console.log(json.response.body.items.item);
    console.log(json.response.body.items.item);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="detail">
      <div className="faclNm">{state.facltNm}</div>
      <div className="camping_address">{state.addr1}</div>

      {images.length !== 0 ? (
        <ImageCarousel images={images}></ImageCarousel>
      ) : null}
    </div>
  );
}

export default CampingDetail;
