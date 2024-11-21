import "../styles/Speakers.css";

export const Speakers = () => {
  return (
    <>
      <section id="speakers" className="speakers-container">
        <div>
          <h2 className="speakers-title">Conoce nuestros conferencistas</h2>
          <div className="speakers-image">
            <div>
              <div className="speakers-image-container">
                <img src="https://u2y8h9a9.rocketcdn.me/wp-content/uploads/2022/05/public-speaker-1.png" />
              </div>
              <p className="speakers-name">Nombre de la persona</p>
            </div>
            <div>
              <div className="speakers-image-container">
                <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/34996/images/h9u2tGH1TKGUokFQX5uQ_obama-356133_1280.jpg" />
              </div>
              <p className="speakers-name">Nombre de la persona</p>
            </div>
            <div>
              <div className="speakers-image-container">
                <img src="https://i.prcdn.co/img?regionKey=jDEdNOz6J6hT264T9DbOYQ%3D%3D" />
              </div>
              <p className="speakers-name">Nombre de la persona</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
