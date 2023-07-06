import Slider from "react-slick";

function ImageCarousel({ images }) {
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div>
      <Slider>
        {images.map((image) => {
          return (
            <div>
              <img
                src={`${image.imageUrl}`}
                className="carousel_img"
                style={{
                  width: "100%",
                  height: "550px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              ></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ImageCarousel;
