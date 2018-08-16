import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Feedback extends Component {
  constructor(props){
    super(props);
    this.feedback_URL = 'test';
    this.state = {
      type: 'info',
      message: '',
      contactInfo: '',
      feedback: ''
    }

  }
  handleContactInfoChange(event){
    this.setState({contactInfo: event.target.value});
  }
  handleFeedbackChange(event){
    this.setState({feedback: event.target.value});
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState({ type: 'info', message: 'Sending...' }, this.submitFeedback);
  }
  submitFeedback(){
    var component = this;
    fetch(this.feedback_URL,{
      method: 'POST',
      headers:{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        contactInfo: this.state.contactInfo,
        feedback: this.state.feedback
      })
    }).then(function loaded(){
      component.setState({ type: 'success', message: 'Thank you for your feedback! As we continue to improve and scale our platform, we highly value the voice of each and every one of our users. -Geoffrey & Anthony', contactInfo: '', feedback: ''});
    })
  }
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
              <i className="icon-like"></i> Feedback
          </div>
          <div class="card-body">
            <Form onSubmit = {e => this.handleSubmit(e)}>
              <FormGroup>
                <Label for="exampleEmail">Contact Info (optional)</Label>
                <Input type="text" value= {this.state.contactInfo} onChange = {e => this.handleContactInfoChange(e)} placeholder="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Feedback</Label>
                <Input type="textarea" value={this.state.feedback} onChange = {e => this.handleFeedbackChange(e)} placeholder = "Feedback" style={{height: '150px'}}/>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            {status}
          </div>
        </div>
      </div>
    );
  }
}
export default Feedback;
