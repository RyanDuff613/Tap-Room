import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  
  return (
    <React.Fragment>
      <h3>{ props.brand }</h3>
      <h3>{ props.name }</h3>
      <h3>{ props.price }</h3>
      <h3>{ props.alcoholContent }</h3>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  brand: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
}

export default Keg;