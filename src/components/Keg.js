import React from "react";

function Keg(){
  const name = "Hefeveizen";
  const brand = "widmer";
  const price = "4.25";
  const alcoholContent = "5%";

  return (
    <React.Fragment>
      <h3>{ brand }</h3>
      <h3>{ name }</h3>
      <h3>{ price }</h3>
      <h3>{ alcoholContent }</h3>
      <hr />
    </React.Fragment>
  );
}

export default Keg;