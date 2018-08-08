import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Create extends Component {
  constructor(props){
    super(props);
    this.feedback_URL = 'test';
    this.state = {
     
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

  render() {
    return (
        <Modal show={this.state.show} onHide={this.handleClose}>
        </Modal>
    );
  }
}
export default Create;
