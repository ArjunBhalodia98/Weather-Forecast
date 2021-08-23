import React from 'react';
import { Card, Form, Button, Alert, Container, Row, Col} from 'react-bootstrap';

export default function WeatherCard(props) {

    return (
        <Col>
            <Card style={{ width: '10rem' }}>
                <Card.Body>
                    <Card.Title>{props.day}</Card.Title>
                    <Card.Text className="d-flex align-items-center flex-column">
                        <div style={{fontWeight: 'bold'}}>{props.text}</div>
                        <div style={{fontStyle: 'italic'}}>{props.Date}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )

}
