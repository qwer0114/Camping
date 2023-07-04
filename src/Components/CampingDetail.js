import { useEffect, useState } from "react";
import { useLocation } from "react-router";

function CampingDetail({ detail }) {
  const { state } = useLocation();
  const [images, setImages] = useState([]);
  console.log(state);

  const getList = async () => {
    const imageLists = await fetch(
      `${process.env.REACT_APP_IMAGE_API_ADDRESS}&serviceKey=${process.env.REACT_APP_IMAGE_API_KEY}&_type=json&contentId=${state.contentId}`
    );
    const json = await imageLists.json();
    setImages(json.response.body.items.item);
    console.log(json.response.body.items.item);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <h2>{state.facltNm}</h2>
      <div className="camping_address">{state.addr1}</div>
      <div className="image_container">
        <img src={`${images[0].imageUrl}`}></img>
        <img src={`${images[1].imageUrl}`}></img>
        <img src={`${images[2].imageUrl}`}></img>
      </div>
    </div>
  );
}

export default CampingDetail;
