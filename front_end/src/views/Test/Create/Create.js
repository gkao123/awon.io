import React, { Component } from 'react';
import { Modal, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import isNil from 'lodash/fp/isNil';

class Create extends Component {
  constructor(props){
    super(props);
    this.feedback_URL = 'test';
    this.state = {
     
    }
  }
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }
  handleKeyUp(e) {
    const { onCloseRequest } = this.props;
    const keys = {
      27: () => {
        e.preventDefault();
        onCloseRequest();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      },
    };

    if (keys[e.keyCode]) { keys[e.keyCode](); }
  }
  handleOutsideClick(e) {
    const { onCloseRequest } = this.props;

    if (!isNil(this.modal)) {
      if (!this.modal.contains(e.target)) {
        onCloseRequest();
        document.removeEventListener('click', this.handleOutsideClick, false);
      }
    }
  }

  render() {
    return (
    <Modal
        {...this.props}
        bsSize="small"
        aria-labelledby="contained-modal-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" value= {this.state.title} onChange = {e => this.handleTitleChange(e)} placeholder="title" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Location</Label>
              <Input type="text" value={this.state.location} onChange = {e => this.handleLocationChange(e)} placeholder = "Gosman Athletic Center" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" value={this.state.feedback} onChange = {e => this.handleFeedbackChange(e)} placeholder = "List any additional details you think would be helpful for any fulfillers." style={{height: '150px'}}/>
            </FormGroup>
            <FormGroup>
              <Label for="contactInfo">Contact Info (optional)</Label>
              <Input type="text" value= {this.state.contactInfo} onChange = {e => this.handleContactInfoChange(e)} placeholder="Email/phone number/facebook profile/etc." />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
Create.propTypes = {
  onCloseRequest: PropTypes.func,
};

export default Create;
