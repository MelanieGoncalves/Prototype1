import React, { Component } from 'react';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';

class AddAccounts extends Component {
    constructor(props) {
        super(props);
    }

    addFB() {
        let currentaccounts = JSON.parse(localStorage.getItem('accounts'));
        console.log(currentaccounts.twitter);
        let accounts = {
            facebook: true,
            twitter: currentaccounts.twitter,
            linkedin: currentaccounts.linkedin,
            instagram: currentaccounts.instagram
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }

    addTW() {
        let currentaccounts = JSON.parse(localStorage.getItem('accounts'));
        let accounts = {
            facebook: currentaccounts.facebook,
            twitter: true,
            linkedin: currentaccounts.linkedin,
            instagram: currentaccounts.instagram
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }

    addLI() {
        let currentaccounts = JSON.parse(localStorage.getItem('accounts'));
        let accounts = {
            facebook: currentaccounts.facebook,
            twitter: currentaccounts.twitter,
            linkedin: true,
            instagram: currentaccounts.instagram
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }

    addIG() {
        let currentaccounts = JSON.parse(localStorage.getItem('accounts'));
        let accounts = {
            facebook: currentaccounts.facebook,
            twitter: currentaccounts.twitter,
            linkedin: currentaccounts.linkedin,
            instagram: true
        }
        localStorage.setItem('accounts', JSON.stringify(accounts));
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
                        <ButtonToolbar>
                            <Button onClick={this.addFB} ><img src={require('../images/fblogo.jpg')} alt=" " style={{ height: "150px" }} /></Button>
                            <Button onClick={this.addTW} ><img src={require('../images/twitter.jpg')} style={{ height: "150px" }} /></Button>
                            <Button onClick={this.addLI} ><img src={require('../images/linkedin.jpg')} style={{ height: "150px" }} /></Button>
                            <Button onClick={this.addIG} ><img src={require('../images/insta.jpeg')} alt=" " style={{ height: "150px" }} /></Button>
                        </ButtonToolbar>
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