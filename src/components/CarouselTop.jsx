import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Fade efekti için gerekli stil
import { useEffect, useRef } from "react";

const CarouselTop = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2014/12/12/01/52/mercedes-564949_640.jpg",
    "https://cdn.pixabay.com/photo/2016/08/07/11/15/jaguar-1576059_640.jpg",
    "https://cdn.pixabay.com/photo/2016/06/20/22/41/mercedes-benz-1470152_640.jpg",
    "https://cdn.pixabay.com/photo/2018/05/15/06/35/mercedes-3402297_640.jpg",
    "https://cdn.pixabay.com/photo/2018/05/21/12/50/icon-3418201_640.png",
    "https://cdn.pixabay.com/photo/2016/08/04/22/44/mercedes-1571165_640.jpg",
    "https://cdn.pixabay.com/photo/2016/06/20/22/32/mercedes-benz-1470118_640.jpg",
    "https://cdn.pixabay.com/photo/2015/09/08/19/00/vw-930542_640.jpg",
    "https://cdn.pixabay.com/photo/2016/06/20/22/33/mercedes-benz-1470124_640.jpg",
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current.swiper;
    if (!swiper) return;

    const handleSlideChangeStart = () => {
      const progressBar = document.querySelector(".custom-progress-bar");
      progressBar.style.width = "0%";
    };

    const handleSlideChangeEnd = () => {
      const progressBar = document.querySelector(".custom-progress-bar");
      progressBar.style.transition = "width 5000ms linear";
      progressBar.style.width = "100%";
    };

    swiper.on("slideChangeTransitionStart", handleSlideChangeStart);
    swiper.on("slideChangeTransitionEnd", handleSlideChangeEnd);

    // İlk slayt için de animasyonu başlat
    handleSlideChangeEnd();

    return () => {
      swiper.off("slideChangeTransitionStart", handleSlideChangeStart);
      swiper.off("slideChangeTransitionEnd", handleSlideChangeEnd);
    };
  }, []);

  return (
    <div className="container-fluid p-0" style={{ height: "60vh" }}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        direction={"horizontal"}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        className="h-100 w-100"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide d-flex justify-content-center align-items-center flex-column"
          >
            <div className="custom-progress-bar"></div>
            <div className="position-absolute text-center bg-dark text-white p-3 rounded">
              Slide {index + 1}
            </div>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-100 w-100 object-fit-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselTop;
