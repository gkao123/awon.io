import React, { Component } from '../../../../../../../../.cache/typescript/2.9/node_modules/@types/react';
import { Modal, Form, FormGroup, Label, Input} from '../../../../../../../../.cache/typescript/2.9/node_modules/@types/reactstrap';
// import PropTypes from 'prop-types';
// import isNil from 'lodash/fp/isNil';

class Create extends Component {
  constructor(props){
    super(props);
    this.feedback_URL = 'test';
    this.state = {
      title: 'info',
      location: '',
      description: '',
      contactInfo: ''
    }
  }
  handleContactInfoChange(event){
    this.setState({contactInfo: event.target.value});
  }
  handleFeedbackChange(event){
    this.setState({feedback: event.target.value});
  }
  render() {
    return (
    <Modal bsSize="small" aria-labelledby="contained-modal-title-sm" >
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
              <Input type="textarea" value={this.state.description} onChange = {e => this.handleDescriptionChange(e)} placeholder = "List any additional details you think would be helpful for any fulfillers." style={{height: '150px'}}/>
            </FormGroup>
            <FormGroup>
              <Label for="contactInfo">Contact Info (optional)</Label>
              <Input type="text" value= {this.state.contactInfo} onChange = {e => this.handleContactInfoChange(e)} placeholder="Email/phone number/facebook profile/etc." />
            </FormGroup>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default Create;
