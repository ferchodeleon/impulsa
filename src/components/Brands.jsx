import { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "../styles/Brands.css";
import brands from "../assets/brands/brands";

export const Brands = () => {
  const [screenWith, setScreenWith] = useState(window.innerWidth);

  const changeScreen = () => setScreenWith(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", changeScreen);

    return () => window.removeEventListener("resize", changeScreen);
  }, []);
  return (
    <section id="marcas" className="brands-container">
      <div className="brands-section">
        <h2>Marcas Participantes:</h2>
        <div>
          <Swiper
            style={{ height: "20vh" }}
            slidesPerView={
              screenWith > 1200
                ? 6
                : screenWith < 1200 && screenWith > 900
                ? 4
                : 2
            }
            spaceBetween={30}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.Heloim} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.Bywc} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.Aroma} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.Asosalud} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.Boxdes} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.Brave} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.Ceahi} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.CrushCookies} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.Fileo} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.Forgive} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.LifeOn} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.Lizzeto} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.Lykke} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={brands.ImageMR} />
              </div>
            </SwiperSlide>
            <div className="brands-images-container">
              <img src={brands.Ojala} />
            </div>
            <div className="brands-images-container">
              <img src={brands.ParejaFinanzas} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Perfect} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Pomposa} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Postreros} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Preciada} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Sonia} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Thermo} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Wale} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Hesed} />
            </div>
            <div className="brands-images-container">
              <img src={brands.SouvenirsFactory} />
            </div>
            <div className="brands-images-container">
              <img src={brands.CoffeeJesus} />
            </div>
            <div className="brands-images-container">
              <img src={brands.SPRadio} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Tribu} />
            </div>
            <div className="brands-images-container">
              <img src={brands.LaPuerta} />
            </div>
            <div className="brands-images-container">
              <img src={brands.EscuchandoCielo} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Anbu} />
            </div>
            <div className="brands-images-container">
              <img src={brands.GoldFemme} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Hilos} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Property} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Shimex} />
            </div>
            <div className="brands-images-container">
              <img src={brands.MarcelaDios} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Mana} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Sln} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Patiya} />
            </div>
            <div className="brands-images-container">
              <img src={brands.LeoDuran} />
            </div>
            <div className="brands-images-container">
              <img src={brands.Juliana} />
            </div>
            <div className="brands-images-container">
              <img src={brands.ColombiaLiving} />
            </div>
            <div className="brands-images-container">
              <img src={brands.DayCompany} />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
