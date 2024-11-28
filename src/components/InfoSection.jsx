import Exhibition from "../assets/images/exhibition.png";
import Stand from "../assets/images/stand.png";
import Attendants from "../assets/images/attendants.png";
import Categories from "../assets/images/categories.png";
import DecorationInfo from "../assets/images/decoration-info.png";
import IconBittereRed from "../assets/images/icon-birrete-red.png";
import VideoImpulsa from "../assets/FERIA IMPULSA-VF.mp4";
import "../styles/InfoSection.css";

export const InfoSection = () => {
  return (
    <>
      <section id="whatisimpulsa" className="info-container">
        <img
          className="decoratino-info"
          src={DecorationInfo}
          alt="Imagen de varios Birretes"
        />
        <div className="info-section">
          <div className="info-exhibition">
            <img src={Exhibition} />
            <p className="info-quantity">2</p>
            <p className="info-description">Días de exhibición</p>
          </div>
          <div className="info-exhibition">
            <img src={Stand} />
            <p className="info-quantity">47</p>
            <p className="info-description">Marcas participantes</p>
          </div>
          <div className="info-exhibition">
            <img src={Attendants} />
            <p className="info-quantity">+1000</p>
            <p className="info-description">Asistentes diarios</p>
          </div>
          <div className="info-exhibition">
            <img src={Categories} />
            <p className="info-quantity">+10</p>
            <p className="info-description">Categorías comerciales</p>
          </div>
        </div>
      </section>
      <section className="info-schedule info-container">
        <div>
          <h3 className="info-schedule-title">Horarios</h3>
          <p className="info-schedule-descrip">
            Sábado de 10:00 a.m. a 8:00 p.m
          </p>
          <p className="info-schedule-descrip">
            Domingo de 8:00 a.m. a 2:00 p.m
          </p>
        </div>
      </section>
      <section className="info-video">
        <div className="info-video-container">
          <img
            className="icon-left"
            src={IconBittereRed}
            alt="Icon Birrete en color rojo"
          />
          <img
            className="icon-right"
            src={IconBittereRed}
            alt="Icon Birrete en color rojo"
          />
          <video
            src={VideoImpulsa}
            controls
            preload="auto"
            controlsList="nodownload"
          />
        </div>
      </section>
    </>
  );
};
