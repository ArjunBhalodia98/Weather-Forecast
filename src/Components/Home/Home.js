import React, {useState} from 'react';
import WeatherCard from '../Card/Card';
import {Container, Row} from 'react-bootstrap';
import SearchBar from 'material-ui-search-bar';

export default function Home() {

  const [place, setPlace] = useState('')

  var weatherCards = []

  function fetchApi(name){
    fetch("http://api.openweathermap.org/data/2.5/forecast?cnt=5&units=imperial&q=" + name + "&APPID=6c6633bc4f98cbc689f2808a390a9fe1")
    .then(res => res.json())
    .then((result) => {
        console.log(result)
        const weatherData = {
          Day: String,
          Date: String,
          Symbol: String,
          Temperature: String,
          Condition: String
        }
        weatherData.Day = "Arjun"
        const weatherData1 = {
          Day: String,
          Date: String,
          Symbol: String,
          Temperature: String,
          Condition: String
        }
        weatherData1.Day = "Arjun1"
        weatherCards.push(weatherData)
        weatherCards.push(weatherData1)
        console.log(weatherCards)
    })
  }

  return (
    <div>
      <SearchBar
      onChange={(searchValue) => setPlace(searchValue)}
      onRequestSearch={() => fetchApi(place)}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
      className="mb-3 mt-3"
      />
      <Container>
        <Row xs={1} md={4} lg={5}>
          <WeatherCard text="Friday" Date="March 1st" WeatherCondition="Sunny"/>
          <WeatherCard text="Saturday" Date="March 2st" WeatherCondition="Sunny"/>
          <WeatherCard text="Sunday" Date="March 3rd" WeatherCondition="Sunny"/>
          <WeatherCard text="Monday" Date="March 4th" WeatherCondition="Sunny"/>
          <WeatherCard text="Tuesday" Date="March 5th" WeatherCondition="Sunny"/>
        </Row>
      </Container>
    </div>
  )
}