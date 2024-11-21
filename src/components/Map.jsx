import "../styles/Map.css";

export const Map = () => {
  return (
    <section id="map" className="map-container">
      <div className="map-section">
        <h2>Mapa</h2>
        <div className="map">
          <div className="map-info">
            <p>
              Dirección: <br />
              <span>Carrera 50 #94c-06 | Auditorio Encuentros</span>
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.248031094981!2d-74.06390804326547!3d4.683504172072389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ae8fb5763f1%3A0xc6ba560226e08065!2sCra.%2050%20%2394c-17%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1732111661076!5m2!1sen!2sco"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
