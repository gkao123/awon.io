
import React, { Component } from 'react';
import { CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import ContactInfoModal from './ContactInfoModal.js'


class Item extends Component {
    constructor(props) {
        super(props);
        this.api_URL = 'api.awon.io/api/get_item/id=' + this.props.match.params.id;

        this.state = {
            error: null,
            isLoaded: false,
            userItems: [],
        };
    }
    componentDidMount() {
        fetch(this.api_URL,{
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
              console.log(res)
              this.setState({
                isLoaded: true,
                userItems: res
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
  render() {
    const { error, isLoaded, userItems } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var userItemComponent = this.state.userItems.map(function(item) {
        return (
          <div>
            <div class="container">
              <div class = "row"><div class = "col-12"><strong>{item.title}</strong></div></div>
              <div class = "row">
                <div class = "col-8">{item.location}</div>
                <div class = "col">${item.price}</div>
              </div>
              <div class = "row">
                <div class = "col-12"> {item.body} </div>
              </div>
            </div>
            <ContactInfoModal contactInfo={item.contactInfo}/>
          </div>
        )
      });
       return (
       <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
              <i className="icon-star"></i> Request
          </div>
          <div class="card-body">
          {userItemComponent}
          </div>
        </div>
      </div>
    )
    }
  }
}

export default Item;
