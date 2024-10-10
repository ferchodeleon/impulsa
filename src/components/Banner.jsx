import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Banner1 from "../assets/images/banner1.png";
import Banner2 from "../assets/images/banner2.jpg";
import "../styles/Banner.css";

import { Keyboard, Pagination, Navigation } from "swiper/modules";

export const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="banner-swiper"
        autoplay={true}
      >
        <SwiperSlide className="banner1">
          <img src={Banner1} alt="Imagen una mujer con un birrete" />
          <p>
            <span className="banner1-strong">Ven</span>, llegó el momento para{" "}
            <span className="banner1-background">impulsar nuevas</span> ideas y
            negocios.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="Banner con fecha de la feria" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};
