import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useGlobalContext } from "../context/context";

const Carousel = () => {
  const { slick } = useGlobalContext();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="slider-container w-full ">
      <Slider {...settings}>
        {slick.map((slide) => {
          const { id, name, image } = slide;
          return (
            <div key={id} className="slide">
              <img
                src={image}
                alt={name}
                className="slide-image w-full object-cover  max-h-screen mx-auto rounded-lg"
              />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Carousel;
