import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

  function handleNewKegFormSubmission(event){
    event.preventDefault();
    props.onNewKegCreation({brand: event.target.brand.value,
                            name: event.target.name.value,
                            price: event.target.price.value,
                            alcoholContent: event.target.alcoholContent.value,
                            id: v4() });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='brand'
          placeholder='Brand Name' />
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          type='text'
          name='price'
          placeholder='Price Per Pint' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content' />
        <button type='submit'>Add Keg to Inventory</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};


export default NewKegForm;