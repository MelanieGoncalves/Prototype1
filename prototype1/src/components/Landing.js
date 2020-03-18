import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Card style={{
                    width: "85%",
                    margin: "50px auto",
                    backgroundColor: "gray"
                }}>
                    <Card.Title>Test</Card.Title>
                    <Card.Body>

                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Landing;