import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather(cityData) {
    if (!cityData) {
      return (
        <tr>
          <td>unknown city</td>
          <td>no data</td>
          <td>no data</td>
          <td>no data</td>
        </tr>
      );
    }

    const { name } = cityData.city;
    // const { temp, humidity, pressure } = .main;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temps} color="orange" /></td>
        <td><Chart data={humidities} color="blue" /></td>
        <td><Chart data={pressures} color="black" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table '>
        <thead>
         <tr>
           <th>City</th>
           <th>temperature</th>
           <th>humidity</th>
           <th>Pressure</th>
         </tr>
        </thead>
        <tbody>
          { this.props.weather.map((cityData) => this.renderWeather(cityData)) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return {
    weather
  };
}

export default connect(mapStateToProps)(WeatherList);
