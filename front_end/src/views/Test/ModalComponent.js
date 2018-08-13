//ModalComponent.js
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

export default class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.api_URL = 'test';
    this.state = { modal: false,
      title: '',
      location: '',
      description: '',
      contactInfo: ''
    }
    this.toggle = this.toggle.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleTitleChange(event){
    this.setState({title: event.target.value});
  }
  handleLocationChange(event){
    this.setState({location: event.target.value});
  }
  handleDescriptionChange(event){
    this.setState({description: event.target.value});
  }
  handleContactInfoChange(event){
    this.setState({contactInfo: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.toggle;
  }


    //  <button onClick={this.toggle}><i class="fas fa-plus-circle"></i></button>

  render() {
    return (
        <div>
          <button class = "btn" onClick={this.toggle}><i className="fa fa-plus-square fa-2x mt-4"></i></button>
          <Modal isOpen={this.state.modal}>
            <ModalBody>
            <Form onSubmit = {e => this.handleSubmit(e)}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" value= {this.state.title} onChange = {e => this.handleTitleChange(e)} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Location</Label>
              <Input type="text" value={this.state.location} onChange = {e => this.handleLocationChange(e)}/>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" value={this.state.description} onChange = {e => this.handleDescriptionChange(e)} placeholder = "List any additional details you think would be helpful for any fulfillers." style={{height: '150px'}}/>
            </FormGroup>
            <FormGroup>
              <Label for="contactInfo">Contact Info (optional)</Label>
              <Input type="text" value= {this.state.contactInfo} onChange = {e => this.handleContactInfoChange(e)} placeholder="Email/phone number/facebook profile/etc." />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
            </ModalBody>
          </Modal>
        </div>
      
    );
  }
}