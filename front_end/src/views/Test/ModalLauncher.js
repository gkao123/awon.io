import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import PropTypes from 'prop-types';
import CreateModal from './Create/Create.js';



class ModalLauncher extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }

  }
  handleToggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }
  
  render() {
    const { showModal } = this.state;

    if (this.buttonLabel == "Create"){
        var button = <CreateModal onCloseRequest={() => this.handleToggleModal()} />;
    }
    return (
        <div>
          <Button color= "primary" size = "sm" onClick={() => this.handleToggleModal()}> Launch modal </Button>
          {showModal && button}
        </div>
    );
  }
}

ModalLauncher.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
}

export default ModalLauncher;
