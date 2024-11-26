import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import "../styles/Brands.css";
import Heloim from "../assets/brands/Heloim.jpg";
import Bywc from "../assets/brands/ByW.jpg";
import Aroma from "../assets/brands/aroma.jpg";
import Asosalud from "../assets/brands/Asosalud.jpg";
import Boxdes from "../assets/brands/Boxdes.jpg";
import Brave from "../assets/brands/Brave.jpg";
import Ceahi from "../assets/brands/Ceahi.jpg";
import CrushCookies from "../assets/brands/CrushCookies.jpg";
import Fileo from "../assets/brands/Fileo.jpg";
import Forgive from "../assets/brands/Forgive.jpg";
import LifeOn from "../assets/brands/Life-on.jpg";
import Lizzeto from "../assets/brands/Lizzeto.jpg";
import Lykke from "../assets/brands/Lykke.jpg";
import ImageMR from "../assets/brands/MR.jpg";
import Ojala from "../assets/brands/Ojala.jpg";
import ParejaFinanzas from "../assets/brands/ParejaFinanzas.jpg";
import Perfect from "../assets/brands/Perfect.jpg";
import Pomposa from "../assets/brands/Pomposa.jpg";
import Postreros from "../assets/brands/Postreros.jpg";
import Preciada from "../assets/brands/Preciada.jpg";
import Sonia from "../assets/brands/Sonia.jpg";
import Thermo from "../assets/brands/Thermo.jpg";
import Wale from "../assets/brands/WaleSong.jpg";
import Hesed from "../assets/brands/Hesed.jpg";
import SouvenirsFactory from "../assets/brands/SouvenirsFactory.jpg";
import CoffeeJesus from "../assets/brands/coffee.jpg";
import SPRadio from "../assets/brands/SP-radio.jpg";
import Tribu from "../assets/brands/tribu.jpg";
import LaPuerta from "../assets/brands/la_puerta.jpg";
import EscuchandoCielo from "../assets/brands/escuchando_del_cielo.jpg";
import DayCompany from "../assets/brands/day_company.jpg";
import Anbu from "../assets/brands/anbu.jpg";
import GoldFemme from "../assets/brands/gold_femme.jpg";
import Hilos from "../assets/brands/hilos.jpg";
import Property from "../assets/brands/property.jpg";
import Shimex from "../assets/brands/shimex.jpg";
import MarcelaDios from "../assets/brands/marcela_dios.jpg";
import Mana from "../assets/brands/mana.jpg";
import Sln from "../assets/brands/sln.jpg";
import Patiya from "../assets/brands/patiya.jpg";
import LeoDuran from "../assets/brands/leo_duran.jpg";
import Juliana from "../assets/brands/juliana.jpg";
import ColombiaLiving from "../assets/brands/colombia_living.jpg";
import { useEffect } from "react";
import { useState } from "react";

export const Brands = () => {
  const [screenWith, setScreenWith] = useState(window.innerWidth);

  const changeScreen = () => setScreenWith(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", changeScreen);

    return () => window.removeEventListener("resize", changeScreen);
  }, []);

  console.log(window.innerWidth);
  return (
    <section id="marcas" className="brands-container">
      <div className="brands-section">
        <h2>Marcas Participantes:</h2>
        <div className="brands-images">
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
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={Heloim} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={Bywc} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={Aroma} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={Asosalud} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={Boxdes} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={Brave} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={Ceahi} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={CrushCookies} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={Fileo} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={Forgive} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={LifeOn} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={Lizzeto} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={Lykke} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="brands-images-container">
                <img src={ImageMR} />
              </div>
            </SwiperSlide>
            <div className="brands-images-container">
              <img src={Ojala} />
            </div>
            <div className="brands-images-container">
              <img src={ParejaFinanzas} />
            </div>
            <div className="brands-images-container">
              <img src={Perfect} />
            </div>
            <div className="brands-images-container">
              <img src={Pomposa} />
            </div>
            <div className="brands-images-container">
              <img src={Postreros} />
            </div>
            <div className="brands-images-container">
              <img src={Preciada} />
            </div>
            <div className="brands-images-container">
              <img src={Sonia} />
            </div>
            <div className="brands-images-container">
              <img src={Thermo} />
            </div>
            <div className="brands-images-container">
              <img src={Wale} />
            </div>
            <div className="brands-images-container">
              <img src={Hesed} />
            </div>
            <div className="brands-images-container">
              <img src={SouvenirsFactory} />
            </div>
            <div className="brands-images-container">
              <img src={CoffeeJesus} />
            </div>
            <div className="brands-images-container">
              <img src={SPRadio} />
            </div>
            <div className="brands-images-container">
              <img src={Tribu} />
            </div>
            <div className="brands-images-container">
              <img src={LaPuerta} />
            </div>
            <div className="brands-images-container">
              <img src={EscuchandoCielo} />
            </div>
            <div className="brands-images-container">
              <img src={Anbu} />
            </div>
            <div className="brands-images-container">
              <img src={GoldFemme} />
            </div>
            <div className="brands-images-container">
              <img src={Hilos} />
            </div>
            <div className="brands-images-container">
              <img src={Property} />
            </div>
            <div className="brands-images-container">
              <img src={Shimex} />
            </div>
            <div className="brands-images-container">
              <img src={MarcelaDios} />
            </div>
            <div className="brands-images-container">
              <img src={Mana} />
            </div>
            <div className="brands-images-container">
              <img src={Sln} />
            </div>
            <div className="brands-images-container">
              <img src={Patiya} />
            </div>
            <div className="brands-images-container">
              <img src={LeoDuran} />
            </div>
            <div className="brands-images-container">
              <img src={Juliana} />
            </div>
            <div className="brands-images-container">
              <img src={ColombiaLiving} />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
