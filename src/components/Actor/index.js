import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, charactor, imageUrl }) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor" />
    <h3>{name}</h3>
    <p>{charactor}</p>
  </Wrapper>
);

Actor.propTypes = {
  name: PropTypes.string,
  charactor: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Actor;
