import React, {useState} from 'react';
import WeatherCard from '../Card/Card';
import {Container, Row, Modal} from 'react-bootstrap';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import SearchAppBar from '../AppBar'
import Link from '@material-ui/core/Link';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Home() {

  const [place, setPlace] = useState('')
  const [cards, setCards] = useState([])
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false);
  const [messageState, setMessageState] = useState('')
  const [modalId, setModalId] = React.useState("");

  const handleModalClose = () => setModalId("")

  function fetchApi(name){
    setCards([])
    fetch("https://api.openweathermap.org/data/2.5/forecast?cnt=30&units=imperial&q=" + name + "&APPID=6c6633bc4f98cbc689f2808a390a9fe1")
    .then(res => res.json())
    .then((result) => {
        for(var i = 0; i < 30; i++){
          var date = new Date(result['list'][i]['dt'] * 1000)
          setCards(prevItems => [...prevItems, {
            id: Math.floor((Math.random() * 100000) + 1),
            Day: new Intl.DateTimeFormat('en-US', { weekday: 'long'}).format(date),
            Date: new Intl.DateTimeFormat('en-US', { month: 'long'}).format(date) + " " + date.getDate() + ", " + date.toLocaleString('en-US', { hour: 'numeric', hour12: true }),
            Symbol: "http://openweathermap.org/img/wn/" + result["list"][i]["weather"][0]["icon"] + "@2x.png",
            Temperature: result["list"][i]["main"]["temp"],
            Condition: result["list"][i]["weather"][0]["main"],
            FeelsLike: result["list"][i]["main"]["feels_like"],
            TempMin: result["list"][i]["main"]["temp_min"],
            TempMax: result["list"][i]["main"]["temp_max"],
            Humidity: result["list"][i]["main"]["humidity"],
            WindSpeed: result["list"][i]["wind"]["speed"]
          }])
        }
        setMessageState('success')
        setMessage('Loaded weather for ' + place)
        setOpen(true);
    })
    .catch(() => {
      setMessageState('error')
      setMessage('Unable to load weather')
      setOpen(true);
    })
  }

  function fiveDayWeather(){
    var filteredCards = []
    var avgTemp = 0;
    var avgFeelsLike = 0;
    var avgTempMin = 0;
    var avgTempMax = 0;
    var avgHumidity = 0;
    var avgWindSpeed = 0;
    var currDay = cards[0].Day
    var counter = 0;

    for(var i = 0; i < cards.length; i++){
      if(currDay !== cards[i].Day || i + 1 === cards.length){
        avgTemp = avgTemp/counter;
        avgFeelsLike = avgFeelsLike/counter;
        avgTempMax = avgTempMax/counter;
        avgTempMin = avgTempMin/counter;
        avgHumidity = avgHumidity/counter;
        avgWindSpeed = avgWindSpeed/counter;
        var tempVar = {
          id: Math.floor((Math.random() * 100000) + 1),
          Day: currDay,
          Symbol: cards[i - 1].Symbol,
          Temperature: avgTemp.toFixed(2),
          Condition: cards[i - 1].Condition,
          FeelsLike: avgFeelsLike.toFixed(2),
          TempMin: avgTempMin.toFixed(2),
          TempMax: avgTempMax.toFixed(2),
          Humidity: avgHumidity.toFixed(2),
          WindSpeed: avgWindSpeed.toFixed(2)
        }
        filteredCards.push(tempVar)
        avgTemp = 0;
        avgFeelsLike = 0;
        avgTempMax = 0;
        avgTempMin = 0;
        avgHumidity = 0;
        avgWindSpeed = 0;
        counter = 0;
      }
      avgTemp = avgTemp + cards[i].Temperature;
      avgFeelsLike = avgFeelsLike + cards[i].FeelsLike;
      avgTempMin = avgTempMin + cards[i].TempMin;
      avgTempMax = avgTempMax + cards[i].TempMax;
      avgHumidity = avgHumidity + cards[i].Humidity;
      avgWindSpeed = avgWindSpeed + cards[i].WindSpeed;
      currDay = cards[i].Day
      counter += 1;
    }
    setCards(filteredCards)
  }

  function threeHourWeather() {
    fetchApi(place)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <SearchAppBar placeholder="Enter a place..." writeInput={(searchValue) => {
        setPlace(searchValue)}} functionCall={() => fetchApi(place)} value={place}/>
      <br/>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={messageState}>
          {message}
        </Alert>
      </Snackbar>
      <div className="d-flex justify-content-around">
        <div>
          <Link onClick={() => fiveDayWeather()}>5-Day Weather</Link>
        </div>
        <div>
          <Link onClick={() => threeHourWeather()}>3hr Weather</Link>
        </div>
      </div>
      <Container>
        <Row xs={2} md={4} lg={5}>
          {
            cards.map((card, i) => {
              return(
                <div>
                  <div className='box' onClick={() => setModalId(`modal${i}`)}>
                    <WeatherCard text={card.Day} Date={card.Date} WeatherCondition={card.Condition} Temperature={card.Temperature} Symbol={card.Symbol}/>
                  </div>
                  <Modal
                    show={modalId === `modal${i}`}
                    onHide={handleModalClose}
                    aria-labelledby={`${card.id}ModalLabel`}
                    centered
                  >
                    <Modal.Header id={`${card.id}ModalLabel`} closeButton>
                      <div class="d-flex flex-column">
                        <div>
                          <h3>{card.Day}</h3>
                        </div>
                        <div>
                          <div style={{fontStyle: 'italic', fontSize: '0.9rem'}}>{card.Date}</div>
                        </div>
                      </div>
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        Feels Like: {card.FeelsLike} ºF
                      </div>
                      <div>
                        Minimum Temperature: {card.TempMin} ºF
                      </div>
                      <div>
                        Maximum Temperature: {card.TempMax} ºF
                      </div>
                      <div>
                        Humidity: {card.Humidity}
                      </div>
                      <div>
                        Wind Speed: {card.WindSpeed}
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              )})
          }
        </Row>
      </Container>
    </div>
  )
}