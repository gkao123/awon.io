import React, { Component } from 'react';
import AsyncSelect from 'react-select/lib/Async';
import Item_List from './Item_List';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  NavLink,
} from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'


const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.api_URL = 'https://api.awon.io/api/user_item_records/size=5/';
    this.googleApiKey = 'AIzaSyDuE1ktE0lHYeEAH8bUeOCi10j6qXKR6j8';
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      error: null,
      isLoaded: false,
      userItems: [],
      currentLocation: 'Brandeis University',
      latitude: 42.3663,
      longitude: 71.2592,
      items: null
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);

  }
  componentDidMount() {
    var updatedapi_URL = this.api_URL + "lat=" + this.state.latitude + "/long=" + this.state.longitude
    fetch(updatedapi_URL,{
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
  handleLocationChange(input) {
    if (input == null){
        return;
    } else{
      if (input.value == null){
        return;
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
            console.log('res ', res)
            this.setState({currentLocation: input.value[0].description, latitude: res.result.geometry.location.lat, longitude:res.result.geometry.location.lng})
          })
        .catch(err => {
            console.log('could not fetch data');
            console.log(err);
        })
        var updatedapi_URL = this.api_URL + "lat=" + this.state.latitude + "/long=" + this.state.longitude
        fetch(updatedapi_URL,{
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
  };
  loadOptions = (input) => {
    if (input.length > 2){
      var locationString = input;
      var apiURL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + locationString.split(' ').join('+') + '&key=' + this.googleApiKey;
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
    if (navigator.geolocation){
      var x = navigator.geolocation.getCurrentPosition(function (position) {
          console.log('latitude ', position.coords.latitude)
          let positionArray = []
          positionArray.push({latitude: position.coords.latitude, longitude: position.coords.longitude})
          return positionArray
          // this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude, currentLocation: 'Current Location'})
      }, function (e) {
          console.log(e)
          return null;
      }, {
          enableHighAccuracy: true,
          timeout:5000
      });
      if (x!=null){
        this.setState({latitude: x.latitude, longitude: x.longitude, currentLocation: 'Current Location'})
      }
    }
    const { error, isLoaded, userItems } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="animated fadeIn">
        <Row>
          <Col>
          Location: {this.state.currentLocation} 
          </Col>
          </Row>
          <div>
          <label for="exampleText">Update Location:</label>
          <AsyncSelect cacheOptions loadOptions={this.loadOptions} isClearable={true} onChange={this.handleLocationChange}/>
          </div>
          <Row>
            <Item_List userItems={this.state.userItems}/>
            <Col xs="12" sm="6" lg="12">
              <Card className="text-white bg-info" >
                <CardBody className="pb-0">
                  <a href="" style={{color:"#ffffff"}}>
                  <div className="sell_value">$1000</div>
                  <div className="item_description">Need Macbook Pro 15 2017/2016</div>
                  <div className="location_description">Foster Mods, Brandeis University</div>
                  <div className="location_description">17 Jun 2018</div>
                  <div className="invisible">""</div>
                  </a>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" sm="6" lg="12">
              <Card className="text-white bg-info" >
                <CardBody className="pb-0">
                  <a href="" style={{color:"#ffffff"}}>
                  <div className="sell_value">$119</div>
                  <div className="item_description">Help me move my stuff out of my room!</div>
                  <div className="location_description">Charles River Apartments, Brandeis University</div>
                  <div className="location_description">28 July 2018</div>
                  <div className="invisible">""</div>
                  </a>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" sm="6" lg="12">
              <Card className="text-white bg-info">
                <CardBody className="pb-0">

                  <a href="" style={{color:"#ffffff"}}>
                  <div className="sell_value">$560</div>
                  <div className="item_description">Subletter for one month (July) at 244 Cresecent Street</div>
                  <div className="location_description">244 Crescent Street, Waltham MA</div>
                  <div className="location_description">13 May 2018</div>
                  <div className="invisible">""</div>
                </a>
                </CardBody>
                {/* <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                  <Line data={cardChartData1} options={cardChartOpts1} height={70} />
                </div> */}
              </Card>
            </Col>

            <Col xs="12" sm="6" lg="12">
              <Card className="text-white bg-info">
                <CardBody className="pb-0">
                  <a href="" style={{color:"#ffffff"}}>
                  <div className="sell_value">$110</div>
                  <div className="item_description">Looking to buy Introduction to Alogrithms 3rd Edition</div>
                  <div className="location_description">Usen Hall, Brandeis University</div>
                  <div className="location_description">5 May 2018</div>
                  <div className="invisible">""</div>
                </a>
                </CardBody>
              </Card>
            </Col>

            <Col xs="12" sm="6" lg="12">
              <Card className="text-white bg-info">
                <CardBody className="pb-0">
                  <a href="" style={{color:"#ffffff"}}>
                  <div className="sell_value">$16</div>
                  <div className="item_description">3 Chobani yogurts (strawberry) from Hannafords</div>
                  <div className="location_description">Hassenfield Hall, Brandeis University</div>
                  <div className="location_description">10 July 2018</div>
                  <div className="invisible">""</div>
                </a>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default Dashboard;
