import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Image } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/movies/${movieId}`}>
        <Image src={image} alt="moviethumb" />
      </Link>
    ) : (
      <Image src={image} alt="moviethumb" />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
