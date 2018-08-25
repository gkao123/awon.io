//New_Request.js
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import AsyncSelect from 'react-select/lib/Async';

export default class New_Request extends React.Component {
  constructor(props) {
    super(props);
    this.api_URL = 'https://api.awon.io/api/create_user_item';
    this.googleApiKey = 'AIzaSyDuE1ktE0lHYeEAH8bUeOCi10j6qXKR6j8';
    this.state = { 
      modal: false, 
      type: 'info',
      message: '',
      title: '',
      price: '',
      location: '',
      options : [],
      locationErrorMessage: '',
      latitude: null,
      longitude: null,
      isGeocoding: false,
      description: '',
      contactInfo: ''
    }
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleTitleChange(event){
    this.setState({title: event.target.value});
  }
  handlePriceChange(event){
    this.setState({price: event.target.value});
  }
  handleLocationChange(input) {
    if (input == null){
      this.setState({location: '', latitude: null, longitude:null})
    } else{
      if (input.value == null){
        this.setState({location: '', latitude: null, longitude:null})
        return
      }
      var apiURL = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=' + input.value[0].place_id + '&fields=geometry&key=' + this.googleApiKey
      fetch(apiURL,{
          method: 'get',
          dataType: 'json',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => {return res.json();})
        .then(
          (res) => {
            this.setState({location: input.value[0].description, latitude: res.result.geometry.location.lat, longitude:res.result.geometry.location.lng})
          })
          .catch(err => {
              console.log('could not fetch data');
              console.log(err);
              return {options: []}
          })
    }
  };
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
        latitude: this.state.latitude,
        longitude: this.state.longitude,
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
   
  loadOptions = (input) => {
    if (input.length > 2){
      var locationString = input;
      var apiURL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + locationString.split(' ').join('+') + '&key=' + this.googleApiKey
      return fetch(apiURL,{
        method: 'get',
        dataType: 'json',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => {return res.json();})
      .then(
        (res) => {
          let ret = [];
          var predictionArray = Array.from(res.predictions)
          for(var i in  predictionArray) {
            let valueArray = []
            valueArray.push({description: predictionArray[i].description, place_id: predictionArray[i].place_id})
            ret.push({value: valueArray, label: predictionArray[i].description})
          }
          return ret
        })
        .catch(err => {
            console.log('could not fetch data');
            console.log(err);
            return {options: []}
        })
      
    } else{
      return {options: []}
    }
  };

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
                  <AsyncSelect cacheOptions loadOptions={this.loadOptions} isClearable={true} onChange={this.handleLocationChange}/>
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
// export default scriptLoader(
//   ["https://maps.googleapis.com/maps/api/js?key=AIzaSyDuE1ktE0lHYeEAH8bUeOCi10j6qXKR6j8&libraries=places"]
// )(New_Request)