import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText =null;
    if(this.state.formVisible) {
      currentlyVisibleState = <NewKegForm />
      buttonText = "Return to Keg List"
    } else {
      currentlyVisibleState = <KegList />
      buttonText = "Add Keg to Inventory"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }


}



export default KegControl;