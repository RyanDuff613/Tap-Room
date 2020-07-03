import React from "react";
import Keg from "./Keg";

const masterKegList = [
  {
    brand: "widmer",
    name: "hefeveizen",
    price: "$5.00",
    alcoholContent: "5%"
  },
  {
    brand: "ninkasi",
    name: "believer",
    price: "$6.00",
    alcoholContent: "8%"
  }
];


function KegList(){
  return (
    <React.Fragment>
     <hr />
     {masterKegList.map((keg, index) =>
      <Keg brand={keg.brand}
        name={keg.name}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        key={index}/>
     )}
    </React.Fragment>
  );
}

export default KegList;