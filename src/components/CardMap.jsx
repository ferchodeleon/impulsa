import PropTypes from "prop-types";

import "../styles/CardMap.css";

const CardMap = ({ image, title, description, stand }) => {
  return (
    <>
      <img width={150} src={image} />
      <h3 className="stand-title">{title}</h3>
      <p className="stand-description">{description}</p>
      <p className="stand-number">Stand #{stand}</p>
    </>
  );
};

CardMap.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stand: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default CardMap;
