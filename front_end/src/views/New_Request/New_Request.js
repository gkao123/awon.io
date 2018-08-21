//New_Request.js
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

export default class New_Request extends React.Component {
  constructor(props) {
    super(props);
    this.api_URL = 'http://localhost:3000/api/create_user_item';
    this.state = { 
      modal: false, 
      type: 'info',
      message: '',
      title: '',
      price: '',
      location: '',
      description: '',
      contactInfo: ''
    }
  }

  handleTitleChange(event){
    this.setState({title: event.target.value});
  }
  handlePriceChange(event){
    this.setState({price: event.target.value});
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
    this.setState({ type: 'info', message: 'Sending...' }, this.submitForm);
    this.setState({ type: 'info', message: '' });
  }

  submitForm(){
    var component = this;
    fetch(this.api_URL,{
      method: 'POST',
      headers:{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        location: this.state.location,
        price: this.state.price,
        body: this.state.description,
        contactInfo: this.state.contactInfo
      })
    }).then(function loaded(){
      component.setState({ type: 'success', message: 'Thank you for creating a new item', 
      title: '', location: '', description: '', contactInfo: ''});
    })
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
     <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
              <i className="icon-pencil"></i> New Request
          </div>
          <div class="card-body">
            <Form onSubmit = {e => this.handleSubmit(e)}>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" value= {this.state.title} onChange = {e => this.handleTitleChange(e)} />
            </FormGroup>
            <div class ="form-row">
              <div class = "form-group col-md-9">
                <FormGroup>
                  <Label for="exampleText">Location</Label>
                  <Input type="text" value={this.state.location} onChange = {e => this.handleLocationChange(e)}/>
                </FormGroup>
              </div>
              <div class = "form-group col-md-3">
                <FormGroup>
                  <Label for="exampleText">Price</Label>
                  <div class = "input-group-prepend">
                    <span class="input-group-text">$</span> <Input type="number" step='0.01' value={this.state.Price} onChange = {e => this.handlePriceChange(e)} placeholder = '0.00'/>
                  </div>
                </FormGroup>
              </div>
            </div>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" value={this.state.description} onChange = {e => this.handleDescriptionChange(e)} placeholder = "List any additional details you think would be helpful for any fulfillers." style={{height: '150px'}}/>
            </FormGroup>
            <FormGroup>
              <Label for="contactInfo">Contact Info (optional)</Label>
              <Input type="text" value= {this.state.contactInfo} onChange = {e => this.handleContactInfoChange(e)} placeholder="Email/phone number/facebook profile/etc." />
            </FormGroup>
            <div class="btn-toolbar" role="group" aria-label="Basic example">
              <div class="btn-group mr-2" role="group" aria-label="First group"> <Button>Submit</Button> </div>
            </div>
          </Form>
          {status}
            </div>
            </div>
        </div>
      
    );
  }
}