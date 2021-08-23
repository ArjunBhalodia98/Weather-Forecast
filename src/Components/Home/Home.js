import React from 'react';
import WeatherCard from '../Card/Card';
import {Container, Row} from 'react-bootstrap';

export default function Home() {

  return (
    <Container>
      <Row xs={1} md={4} lg={5}>
        <WeatherCard text="Friday" Date="March 1st" WeatherCondition="Sunny"/>
        <WeatherCard text="Saturday" Date="March 2st" WeatherCondition="Sunny"/>
        <WeatherCard text="Sunday" Date="March 3rd" WeatherCondition="Sunny"/>
        <WeatherCard text="Monday" Date="March 4th" WeatherCondition="Sunny"/>
        <WeatherCard text="Tuesday" Date="March 5th" WeatherCondition="Sunny"/>
      </Row>
    </Container>
  )
}