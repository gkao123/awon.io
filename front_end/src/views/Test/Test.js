import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'reactstrap';
import ModalLauncher from './ModalLauncher.js'

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
      <ModalLauncher buttonLabel="Create">
      </ModalLauncher>
      </div>
    );
  }
}
export default Test;
