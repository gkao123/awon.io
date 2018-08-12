import React, { Component } from 'react';
import ModalComponent from './ModalComponent.js'

class Test extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCreateModal: false
    }

  }
  handleToggleCreateModal() {
    this.setState({ showCreateModal: !this.state.showCreateModal });
  }

  render() {

    return (
      <div className="animated fadeIn">
      <ModalComponent/>
      </div>
    );
  }
}
export default Test;
