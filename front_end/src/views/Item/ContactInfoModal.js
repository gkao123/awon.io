//ModalComponent.js
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

export default class ContactInfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      modal: false, 
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.toggle();
  }

    //  <button onClick={this.toggle}><i class="fas fa-plus-circle"></i></button>

  render() {
    if (this.state.message && this.state.type) {
      var classString = 'alert alert-' + this.state.type;
      var status = <div id="status" className={classString} ref="status">
                     {this.state.message}
                   </div>;
    }
    return (
        <div>
          <button class = "btn" onClick={this.toggle}>Help the person?</button>
          <Modal isOpen={this.state.modal}>
            <ModalBody>
                Contact Info = {this.props.contactInfo}
            </ModalBody>
            <button class = "btn" onClick={this.toggle}>Close</button>
          </Modal>
        </div>
      
    );
  }
}