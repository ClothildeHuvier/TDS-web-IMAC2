/* eslint-disable */
import React from 'react';

const Superhero = (props) => (
  <div className="hero_container">
    <h4>
      {props.name}
    </h4>
    <img src={props.picture} alt="SuperHero" />
  </div>
);

export default Superhero;
