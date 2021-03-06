import React from 'react';
import { Card, Col} from 'react-bootstrap';

export default function WeatherCard(props) {

    return (
        <Col className="mb-4 d-flex align-items-center flex-column">
            <Card style={{ width: '10rem' }}>
                <Card.Body>
                    <Card.Title>
                        {props.day}
                    </Card.Title>
                    <Card.Text className="d-flex align-items-center flex-column">
                        <div style={{fontWeight: 'bold'}}>{props.text}</div>
                        <div style={{fontStyle: 'italic', fontSize: '0.9rem'}}>{props.Date}</div>
                        <div> 
                            <img src={props.Symbol}/>
                        </div>
                        <div className="d-flex" style={{fontSize: '2rem'}}>
                            <div>{props.Temperature}</div>
                            <div>ºF</div>
                        </div>
                        <div>{props.WeatherCondition}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )

}
