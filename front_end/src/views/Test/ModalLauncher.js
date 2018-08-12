import React, { Component } from 'react';
import { Button} from 'reactstrap';
import PropTypes from 'prop-types';
import Create from './Create/Create.js';



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
    const { buttonLabel} = this.props;
    const { showModal } = this.state;
    // const modalType = {
    //     create: CreateModal
    // }
    // const Modal = modalType[this.props.buttonLabel]
    // // if (this.props.buttonLabel === "Create"){
    // //     const {button} = <CreateModal onCloseRequest={() => this.handleToggleModal()} />;
    // // }

    return (
        <div>
          <Button color= "primary" size = "sm" onClick={() => this.handleToggleModal()}> {buttonLabel}  </Button>
          <Create/>
        </div>
    );
  }
}


ModalLauncher.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
}

export default ModalLauncher;
