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
    this.setState({formVisible: true});
  }

  render(){
    let currentlyVisibleState = null;
    let addKegButton =null;
    if(this.state.formVisible) {
      currentlyVisibleState = <NewKegForm />
    } else {
      currentlyVisibleState = <KegList />
      addKegButton = <button onClick={this.handleClick}>Add Keg</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addKegButton}
      </React.Fragment>
    )
  }


}



export default KegControl;