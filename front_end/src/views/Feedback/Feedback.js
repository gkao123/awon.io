import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { rgbToHex } from '@coreui/coreui/dist/js/coreui-utilities'




class Feedback extends Component {
  constructor(props){
    super(props);
    this.feedback_URL = 'test';
  }
  getInitialState: function(){
    return {
      message: ''
    }
  }
  handleSubmit(event){
    fetch(this.feedback_URL,{
      method: 'POST',
      headers:{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        contactInfo: 'test',
        feedback: 'test'
      })
    })
    .then();
    alert('Thank you for your feedback! As we continue to improve and scale our platform, we highly value the voice of each and every one of our users. -Geoffrey')
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
              <i className="icon-star"></i> Feedback
          </div>
          <div class="card-body">
            <Form onSubmit = {this.handleSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Contact Info (optional)</Label>
                <Input type="text" name="email" id="exampleEmail" placeholder="we_promise@no_spam.com" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Feedback</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Feedback;
