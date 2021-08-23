import React from 'react';
import { Card, Col} from 'react-bootstrap';
import CloudIcon from '@material-ui/icons/Cloud';

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
                        <div style={{fontStyle: 'italic'}}>{props.Date}</div>
                        <div> <CloudIcon style={{fontSize: '4rem'}}/></div>
                        <div className="d-flex" style={{fontSize: '2rem'}}>
                            <div>32</div>
                            <div>ºF</div>
                        </div>
                        <div>{props.WeatherCondition}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )

}
