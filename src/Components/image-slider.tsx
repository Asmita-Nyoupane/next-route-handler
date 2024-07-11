"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const ImageSlider = () => {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container h-[80vh]">
      <Slider {...settings}>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1613226505855-999302e0c08d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="picture"
            height={600}
            width={600}
            className="object-cover aspect-square"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZyZWUlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D"
            alt="picture"
            height={300}
            width={300}
            className="object-cover  aspect-square"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1551815943-385d5246c8a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZyZWUlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D"
            alt="picture"
            height={300}
            width={300}
            className="object-cover  aspect-square"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1511553677255-ba939e5537e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBuYXR1cmV8ZW58MHx8MHx8fDA%3D"
            alt="picture"
            height={300}
            width={300}
            className="object-cover  aspect-square"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
