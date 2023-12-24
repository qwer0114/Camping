import { useNavigate } from "react-router";
import Slider from "react-slick/lib/slider";

function Carousel({ items, width, height, slidesToShow, url, responsive }) {
  const navigate = useNavigate();
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: Number(slidesToShow),
    slidesToScroll: Number(slidesToShow),
    draggable: true,
    responsive: responsive,
  };

  console.log(responsive);
  return (
    <div>
      <Slider {...settings}>
        {items.map((item, i) => {
          return (
            <div key={i} className="slide">
              <img
                alt="이미지"
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
