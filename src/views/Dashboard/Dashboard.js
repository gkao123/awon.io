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
    this.api_URL = 'http://localhost:3000/api/user_item_records/size=5/';
    this.googleApiKey = 'AIzaSyDuE1ktE0lHYeEAH8bUeOCi10j6qXKR6j8';
    this.latitude = 0,
    this.longitude = 0,
    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
      error: null,
      isLoaded: false,
      userItems: [],
      user_type: '',
      user_role: '',
      location: 'Current Location',
      items: null
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }
  async getUserlocation(){
    console.log('location')
    return fetch('http://api.ipstack.com/check?access_key=b5bb48592e64880f90711adfe8ee94db',{
      method: 'get',
      dataType: 'json',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => {return res.json();})
      .then(
        (res) => {
          console.log('res ', res)
          this.latitude = res.lat
          this.longitude = res.lon
          console.log('res.lat ', res.latitude)
          console.log('res.lon ', res.longitude)
          window.userlat = res.latitude,
          window.userlon = res.longitude
          return {lat: res.lat, lon: res.lon}
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error)
        }
      )
  }
  async componentDidMount() {
    const script = document.createElement("script");
    var srcString = "https://maps.googleapis.com/maps/api/js?key=" + this.googleApiKey + "&libraries=places";
    script.src = srcString;
    script.async = true;
    document.head.appendChild(script);
    script.onload = function() {
        console.log('loaded');
        document.head.appendChild(script);
        window.session_token = new window.google.maps.places.AutocompleteSessionToken();
    };
    await this.getUserlocation();
    this.generateUserItems();
  }
generateUserItems(){
  console.log('generate')
  console.log('type = ', this.state.user_type)
  var updatedapi_URL = this.api_URL + "lat=" + this.latitude + "/long=" + this.longitude
  if (window.userlat != null && window.userlon != null){
    updatedapi_URL = this.api_URL + "lat=" + window.userlat + "/long=" + window.userlon
  }
  if (this.state.user_type != "1" && this.state.user_type != "2" && this.state.user_type != "3"){
    console.log('1');
    updatedapi_URL = updatedapi_URL + "/type=0"
  } else{
    console.log('2')
    updatedapi_URL = updatedapi_URL + "/type=" + this.state.user_type;
  }
  if (this.state.user_role != "1" && this.state.user_role != "2" && this.state.user_role != "3"){
    updatedapi_URL = updatedapi_URL + "/role=0"
  } else{
    updatedapi_URL = updatedapi_URL + "/role=" + this.state.user_role;
  }
  console.log('api ', updatedapi_URL)
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
handleTypeChange(event){
  console.log('type change')
  if (event.target.value)
  this.setState({user_type: event.target.value}, this.generateUserItems);
}
handleRoleChange(event){
  this.setState({user_role: event.target.value}, this.generateUserItems);
}
handleLocationChange(input) {
    if (input == null){
      return;
    } else{
      if (input.value == null){
        return
      }else{
        async function f(input){
          var latlngArray = {lat:0, lng:0}
          let promise = new Promise((resolve, reject) => {
            var geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({'placeId': input.value[0].place_id},function(results, status) {
              if (status == 'OK') {
                latlngArray.lat = results[0].geometry.location.lat();
                latlngArray.lng = results[0].geometry.location.lng();
                console.log('array ', latlngArray)
                resolve(latlngArray)
                } else {
                console.log('Geocode was not successful for the following reason: ' + status);
               }
            });
          });
          let result = await(promise);
          return result;
        }
        f(input).then(res => {
          console.log('res ', res)
          window.userlat = res.lat;
          window.userlon = res.lng;
          this.setState({location: input.value[0].description, latitude: res.lat, longitude: res.lng});
          this.generateUserItems();
          })
        return;
      }
    };
  }
  loadOptions = (input) => {
    if (input.length>2){
      var query = {input: input, session_token: window.session_token};
      if (window.userlat != null && window.userlon !=null){
        var userLatLng = new window.google.maps.LatLng(window.userlat, window.userlon);
        query = {input: input, location: userLatLng, radius: 500, session_token: window.session_token}
      }
      async function f(query){
        let promise = new Promise((resolve, reject) => {
          var autocompleteService = new window.google.maps.places.AutocompleteService();
          let ret = [];
          var displaySuggestions = function (predictions, status) {
            if (status != window.google.maps.places.PlacesServiceStatus.OK) {
                return {options: []}
            }
            predictions.forEach(function (prediction) {
              let valueArray = []
              valueArray.push({description: prediction.description, place_id: prediction.place_id})
              ret.push({value: valueArray, label: prediction.description})
              console.log('ret', ret)
              resolve(ret)
            });
          };        
          autocompleteService.getPlacePredictions(query, displaySuggestions);
        });
        let result = await promise;
        return result;
      }
      return f(query);
    }
    else{
        return {options: []}
      }
  };


  render() {
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
            <strong> Location: {this.state.location} </strong>
          </Col>
        </Row>
          <div>
            <label for="exampleText">Update Location: (sorting by closest to furthest)</label>
            <AsyncSelect cacheOptions loadOptions={this.loadOptions} isClearable={true} onChange={this.handleLocationChange} placeholder = "Update Location"/>
          </div>
          <div class ="form-row">
              <div class = "form-group col-md-6">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Filter Type</label>
                
                <select class="custom-select" id="inputGroupSelect01" value={this.state.user_type} onChange = {e => this.handleTypeChange(e)}>
                  <option selected>Choose...</option>
                  <option value="1">Goods</option><option value="2">Services</option><option value="3">Other</option>
                </select>
                </div>
              </div>
              <div class = "form-group col-md-6">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">Filter Role</label>
                <select class="custom-select" id="inputGroupSelect01" value={this.state.user_role} onChange = {e => this.handleRoleChange(e)}>
                  <option selected>Choose...</option>
                  <option value="1">Buying</option>
                  <option value="2">Selling</option>
                  <option value="3">Other</option>
                </select>
                </div>
              </div>
            </div>
        <Row>
          <Item_List userItems={this.state.userItems}/>
        </Row>
        </div>
      );
    }
  }
}

export default Dashboard;
