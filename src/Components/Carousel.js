import { faL } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import Slider from "react-slick/lib/slider";

function Carousel({ items, width, height, slidesToShow, url }) {
  const navigate = useNavigate();
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: Number(slidesToShow),
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {items.map((item, i) => {
          return (
            <div key={i}>
              <img
                src={
                  url === "item.imageUrl" ? item.imageUrl : item.firstImageUrl
                }
                className="carousel_img"
                style={{
                  width: width,
                  height: height,
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              ></img>
              <div
                onClick={() => {
                  navigate(`/campingDetail/${item.contentId}`, { state: item });
                }}
                style={{ width: width, textAlign: "center" }}
              >
                {item.facltNm}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
