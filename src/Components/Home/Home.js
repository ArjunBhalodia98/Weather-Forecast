import React, {useState} from 'react';
import WeatherCard from '../Card/Card';
import {Container, Row} from 'react-bootstrap';
import SearchBar from 'material-ui-search-bar';

export default function Home() {

  const [place, setPlace] = useState('')
  const [cards, setCards] = useState([])


  function fetchApi(name){
    setCards([])
    fetch("https://api.openweathermap.org/data/2.5/forecast?cnt=30&units=imperial&q=" + name + "&APPID=6c6633bc4f98cbc689f2808a390a9fe1")
    .then(res => res.json())
    .then((result) => {
        for(var i = 0; i < 30; i++){
          var date = new Date(result['list'][i]['dt'] * 1000)
          setCards(prevItems => [...prevItems, {
            Day = new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date),
            Date = new Intl.DateTimeFormat('en-US', { month: 'long'}).format(date) + " " + date.getDate() + ", " + date.toLocaleString('en-US', { hour: 'numeric', hour12: true }),
            Symbol,
            Temperature: result["list"][i]["main"]["temp"],
            Condition: result["list"][i]["weather"][0]["main"]
          }])
        }
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
        <Row xs={2} md={4} lg={5}>
          {
            cards.map((card) => {
              return <WeatherCard text={card.Day} Date={card.Date} WeatherCondition={card.Condition} Temperature={card.Temperature}/>
            })
          }
        </Row>
      </Container>
    </div>
  )
}