import "../styles/Map.css";

export const Map = () => {
  return (
    <section className="map-container">
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.2464770630922!2d-74.06404904326533!3d4.684050772070207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ae8568ced77%3A0x45e2673c5e358138!2sCra.%2050%20%2394c-6%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1729099169242!5m2!1sen!2sco"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
