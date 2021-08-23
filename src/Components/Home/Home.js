import React from 'react';
import WeatherCard from '../Card/Card';
import { Card, Form, Button, Alert, Container, Row, Col} from 'react-bootstrap';

export default function Home() {

  return (
    <Container>
      <Row xs={1} md={4} lg={5}>
        <WeatherCard text="Friday" Date="March 1st"/>
        <WeatherCard text="Saturday" Date="March 2st"/>
        <WeatherCard text="Sunday" Date="March 3rd"/>
        <WeatherCard text="Monday" Date="March 4th"/>
        <WeatherCard text="Tuesday" Date="March 5th"/>
      </Row>
    </Container>
  )
}