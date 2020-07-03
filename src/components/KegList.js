import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";



function KegList(props){
  return (
    <React.Fragment>
     <hr />
     {props.kegList.map((keg, index) =>
      <Keg brand={keg.brand}
        name={keg.name}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        key={index}/>
     )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;