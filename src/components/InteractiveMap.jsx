import { ImageOverlay, MapContainer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/InteractiveMap.css";

import OneFloor from "../assets/maps/floor_1.png";
import TwoFloor from "../assets/maps/floor_2.png";
import { useState } from "react";
import CardMap from "./CardMap";
import brands from "../assets/brands/brands";
import Tap from "../assets/icons/tap.gif";
import PropTypes from "prop-types";

const InteractiveMap = () => {
  const [changeFloor, setChangeFloor] = useState(true);

  const handleChangeFloor = () => {
    console.log(window.innerWidth);
    return setChangeFloor(!changeFloor);
  };

  const icon = L.icon({
    iconUrl: Tap,
    iconSize: [60, 60],
  });

  return (
    <>
      {changeFloor ? <FirstFloor icon={icon} /> : <SecondFloor icon={icon} />}
      <p onClick={handleChangeFloor} className="interactive-button">
        {!changeFloor ? "Ver 1er Piso" : "Ver 2do Piso"}
      </p>
    </>
  );
};

const FirstFloor = ({ icon }) => {
  const bounds = [
    [0, 0],
    [700, 800],
  ];

  return (
    <MapContainer
      center={[450, 400]}
      zoom={window.innerWidth < 800 ? 0.2 : 0.5}
      minZoom={-1}
      crs={L.CRS.Simple}
      style={{ height: "85vh", width: "100%" }}
    >
      <ImageOverlay url={OneFloor} bounds={bounds} />
      <Marker icon={icon} position={[520, 525]}>
        <Popup>
          <CardMap
            image={brands.ColombiaLiving}
            title="Colombia Living"
            description="Luxury Properties"
            stand={1}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[490, 525]}>
        <Popup>
          <CardMap
            image={brands.Preciada}
            title="Preciada Posesión"
            stand={2}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[455, 525]}>
        <Popup>
          <CardMap image={brands.Heloim} title="Heloim" stand={3} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[425, 525]}>
        <Popup>
          <CardMap
            image={brands.EscuchandoCielo}
            title="Escuchando del cielo"
            stand={4}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[395, 525]}>
        <Popup>
          <CardMap
            image={brands.Pomposa}
            title="Pomposa"
            description="Vistiéndote de amor"
            stand={5}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[335, 565]}>
        <Popup>
          <CardMap
            image={brands.MarcelaDios}
            title="Marcela de Dios"
            description="Entre el mar y el cielo"
            stand={6}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[335, 525]}>
        <Popup>
          <CardMap image={brands.Juliana} title="Juliana Rubiano" stand={7} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[335, 485]}>
        <Popup>
          <CardMap
            image={brands.Asosalud}
            title="Asosalud"
            description="Agencia Autorizada Colsanitas"
            stand={8}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[335, 450]}>
        <Popup>
          <CardMap
            image={brands.ParejaFinanzas}
            title="Parejas y finanzas"
            stand={9}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[335, 410]}>
        <Popup>
          <CardMap
            image={brands.Boxdes}
            title="Boxdes"
            description="Design & Packaging"
            stand={10}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[365, 410]}>
        <Popup>
          <CardMap
            image={brands.White}
            title="White Bird"
            description="Papelería ilustrada"
            stand={11}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[397, 408]}>
        <Popup>
          <CardMap
            image={brands.SouvenirsFactory}
            title="Souvenirs Factory"
            stand={12}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[429, 408]}>
        <Popup>
          <CardMap image={brands.Brave} title="Little Brave Polly" stand={13} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[459, 408]}>
        <Popup>
          <CardMap image={brands.Perfect} title="Perfect Smile" stand={14} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[520, 408]}>
        <Popup>
          <CardMap image={brands.Hilos} title="Hilos de púrpura" stand={16} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[520, 488]}>
        <Popup>
          <CardMap image={brands.Shimex} title="Shimex" stand={17} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[490, 488]}>
        <Popup>
          <CardMap image={brands.Thermo} title="Termomix" stand={18} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[430, 488]}>
        <Popup>
          <CardMap image={brands.LifeOn} title="Life On" stand={19} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[400, 488]}>
        <Popup>
          <CardMap image={brands.Fileo} title="Fileo" stand={20} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[520, 370]}>
        <Popup>
          <CardMap image={brands.DayCompany} title="Day Company" stand={21} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[520, 330]}>
        <Popup>
          <CardMap
            image={brands.Bywc}
            title="Beauty and Wonderful"
            stand={22}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[490, 370]}>
        <Popup>
          <CardMap image={brands.Patiya} title="Patiya" stand={23} />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

const SecondFloor = ({ icon }) => {
  const bounds = [
    [0, 0],
    [700, 800],
  ];
  return (
    <MapContainer
      center={[400, 400]}
      zoom={window.innerWidth < 800 ? 0.2 : 0.5}
      minZoom={-1}
      crs={L.CRS.Simple}
      style={{ height: "85vh", width: "100%" }}
    >
      <ImageOverlay url={TwoFloor} bounds={bounds} />
      <Marker icon={icon} position={[360, 435]}>
        <Popup>
          <CardMap
            image={brands.Postreros}
            title="Postreros"
            description="Fabrica de emociones (Postres)"
            stand={24}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[360, 475]}>
        <Popup>
          <CardMap
            image={brands.Anbu}
            title="Ambu"
            description="Alimentos Saludables"
            stand={25}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[360, 515]}>
        <Popup>
          <CardMap image={brands.Ceahi} title="Cedhi Tours" stand={26} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[360, 555]}>
        <Popup>
          <CardMap
            image={brands.LeoDuran}
            title="Leo Duran"
            description="Moda 100% Colombiana"
            stand={27}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[360, 592]}>
        <Popup>
          <CardMap image={brands.Tribu} title="Tribu" stand={28} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[390, 630]}>
        <Popup>
          <CardMap
            image={brands.Sln}
            title="SLN Ortodoncia"
            description="Ortodoncia Invisible"
            stand={29}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[420, 630]}>
        <Popup>
          <CardMap
            image={brands.Lizzeto}
            title="Lizetto"
            description="Store"
            stand={30}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[450, 630]}>
        <Popup>
          <CardMap
            image={brands.Property}
            title="Property Management"
            stand={31}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[482, 630]}>
        <Popup>
          <CardMap image={brands.Wale} title="Walesong" stand={32} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[512, 630]}>
        <Popup>
          <CardMap image={brands.GoldFemme} title="Gold Femme" stand={33} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[542, 630]}>
        <Popup>
          <CardMap
            image={brands.Sonia}
            title="Sonia Velasco H."
            description="Muralista"
            stand={34}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[512, 550]}>
        <Popup>
          <CardMap image={brands.Ojala} title="Ojalá" stand={35} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[482, 550]}>
        <Popup>
          <CardMap
            image={brands.ImageMR}
            title="MR PC"
            description="Store S.A.S"
            stand={36}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[452, 550]}>
        <Popup>
          <CardMap
            image={brands.ImageMR}
            title="MR PC"
            description="Store S.A.S"
            stand={37}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[452, 510]}>
        <Popup>
          <CardMap image={brands.Aroma} title="Aroma Central" stand={38} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[482, 510]}>
        <Popup>
          <CardMap image={brands.Mana} title="Mana" stand={39} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[512, 510]}>
        <Popup>
          <CardMap
            image={brands.Forgive}
            title="Forgive"
            description="Amor del cielo"
            stand={40}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[496, 430]}>
        <Popup>
          <CardMap image={brands.Hesed} title="Hesed" stand={41} />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[466, 430]}>
        <Popup>
          <CardMap
            image={brands.LaPuerta}
            title="La puerta"
            description="Café de Especialidad"
            stand={42}
          />
        </Popup>
      </Marker>
      <Marker icon={icon} position={[466, 390]}>
        <Popup>
          <CardMap
            image={brands.Lykke}
            title="Lykke"
            description="Heladería 100% Natural"
            stand={43}
          />
        </Popup>
      </Marker>
    </MapContainer>
  );
};

FirstFloor.propTypes = {
  icon: PropTypes.string.isRequired,
};
SecondFloor.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default InteractiveMap;
