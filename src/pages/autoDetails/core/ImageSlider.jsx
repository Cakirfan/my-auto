import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
  Keyboard,
} from "swiper/modules";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownLeftAndUpRightToCenter,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalActiveIndex, setModalActiveIndex] = useState(0);
  const controlSwiperRef = useRef(null);
  const modalSwiperRef = useRef(null);

  const nextImage = () => {
    if (controlledSwiper) {
      const nextIndex = (controlledSwiper.activeIndex + 1) % images.length;
      controlledSwiper.slideTo(nextIndex);
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white pb-4 border-bottom border-3 border-primary">
      {/* Main Swiper: Display the selected image */}
      <Swiper
        modules={[
          Navigation,
          Keyboard,
          Pagination,
          Scrollbar,
          A11y,
          Controller,
        ]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        keyboard={true}
        scrollbar={{ draggable: true }}
        controller={{ control: controlledSwiper }}
        onSwiper={(swiper) => {
          setControlledSwiper(swiper);
          swiper.on("slideChange", () => setActiveIndex(swiper.activeIndex));
        }}
        className="mb-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} onClick={nextImage}>
            <img
              src={image}
              alt={`Slide ${index}`}
              style={{ width: "100%", height: "auto", cursor: "pointer" }}
            />
          </SwiperSlide>
        ))}
        <Button
          onClick={handleOpenModal}
          variant="primary"
          className="position-absolute top-0 end-0 m-2 z-3"
        >
          <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
        </Button>
      </Swiper>

      {/* Thumbnails Swiper: Display thumbnails for selection */}
      <Swiper
        modules={[Navigation, Controller]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        onSwiper={(swiper) => {
          controlSwiperRef.current = swiper;
        }}
        controller={{ control: controlSwiperRef.current }}
        className="px-1"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            style={{
              cursor: "pointer",
              border: activeIndex === index ? "2px solid blue" : "none",
            }}
            onClick={() => {
              controlledSwiper.slideTo(index);
            }}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal containing the Swiper */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="xl"
        centered
        fullscreen
        style={{ maxWidth: "100%", margin: "auto" }}
      >
        <Modal.Header className="border-0">
          <Button
            variant="secondary"
            onClick={handleCloseModal}
            className="btn me-2 mt-3 position-absolute end-0"
          >
            <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
          </Button>
        </Modal.Header>

        <Modal.Body style={{ height: "80%" }}>
          <Swiper
            modules={[Navigation, Controller, Keyboard]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            keyboard={true}
            controller={{ control: modalSwiperRef.current }}
            onSwiper={(swiper) => {
              modalSwiperRef.current = swiper;
              swiper.on("slideChange", () =>
                setModalActiveIndex(swiper.activeIndex)
              );
            }}
            style={{ height: "100%" }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal.Body>
        <Modal.Footer>
          <Swiper
            modules={[Navigation, Controller]}
            spaceBetween={10}
            slidesPerView={15}
            navigation
            controller={{ control: modalSwiperRef.current }}
            className="px-1 w-100"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  border:
                    modalActiveIndex === index ? "2px solid blue" : "none",
                }}
                onClick={() => modalSwiperRef.current.slideTo(index)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  style={{ width: "7rem", height: "auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageSlider;
