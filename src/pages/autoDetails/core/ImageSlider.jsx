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
} from "swiper/modules";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ images }) => {
  const [showModal, setShowModal] = useState(false);
  const [controlledSwiper, setControlledSwiper] = useState(null);
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
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        controller={{ control: controlledSwiper }}
        onSwiper={setControlledSwiper}
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
              border:
                controlledSwiper?.activeIndex === index
                  ? "2px solid blue"
                  : "none",
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
      >
        <Modal.Header closeButton>
          <Modal.Title>Image Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            controller={{ control: controlledSwiper }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal.Body>
        <Modal.Footer>
          <Swiper
            modules={[Controller]}
            spaceBetween={10}
            slidesPerView={7}
            onSwiper={(swiper) => (modalSwiperRef.current = swiper)}
            controller={{ control: modalSwiperRef.current }}
            className="px-1"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                style={{
                  cursor: "pointer",
                  border:
                    modalSwiperRef.current?.activeIndex === index
                      ? "2px solid blue"
                      : "none",
                }}
                onClick={() => modalSwiperRef.current.slideTo(index)}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index}`}
                  style={{ width: "100%", height: "auto" }}
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
