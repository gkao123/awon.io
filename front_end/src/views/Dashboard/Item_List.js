import React, { Component } from 'react';
import {Col, Card, CardBody} from 'reactstrap';

export default class Item_List extends Component {
    constructor(props) {
        super(props);
    };
    render(){
        var userItemComponent = this.props.userItems.map(function(item) {
            console.log('rerender')
            return (
                <Col xs="12" sm="6" lg="12" key={item.title}>
                <Card className="text-white bg-info" >
                    <CardBody className="pb-0">
                    <a href={'/#/item/'+ item.postID} style={{color:"#ffffff"}}>
                    <div className="sell_value" key={item.price}>${item.price}</div>
                    <div className="item_description" key={item.title}>{item.title}</div>
                    <div className="location_description" key={item.location}>{item.location}</div>
                    <div className="location_description"key={item.time}>{item.time}</div>
                    <div className="invisible">""</div>
                    </a>
                    </CardBody>
                </Card>
                </Col>

            )
            });
        return(
            userItemComponent
        )
    }
}
