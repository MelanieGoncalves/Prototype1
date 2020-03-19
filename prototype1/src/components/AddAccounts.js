import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class AddAccounts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            ADD ACCOUNTS
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Centered Modal</h4>
                        <img src={require('../images/fblogo.png')} alt=" " style={{ height: "150px" }} />
                        <img src={require('../images/twitter.png')} style={{ height: "150px" }} />
                        <img src={require('../images/linkedin.png')} style={{ height: "150px" }} />
                        <img src={require('../images/insta.jpeg')} alt=" " style={{ height: "150px" }} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>DONE</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default AddAccounts;