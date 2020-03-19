import React, { Component } from 'react';
import { Nav, Button } from 'react-bootstrap';
import AddAccounts from './AddAccounts';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addAccountShow: false
        }
    }



    render() {
        let addAccountClose = () => this.setState({ addAccountShow: false });
        return (
            <div style={{ display: "flex", height: "100%" }}>
                <Nav defaultActiveKey="/home" sticky="left" className="flex-column" variant="pills" style={{ width: "120px", height: "100%", backgroundColor: "darkblue" }}>
                    <Nav.Link style={{ width: "100%", padding: "0" }}><img src={require('../images/fblogo.png')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>
                    <Nav.Link style={{ width: "100%", padding: "0" }}><img src={require('../images/twitter.png')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>
                    <Nav.Link style={{ width: "100%", padding: "0" }}><img src={require('../images/linkedin.png')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>
                    <Nav.Link style={{ width: "100%", padding: "0" }}><img src={require('../images/insta.jpeg')} alt=" " style={{ padding: "0 0", width: "116px", border: "2px solid gray" }} /></Nav.Link>


                </Nav>
                <div style={{ padding: "20px", display: "flex", flexDirection: "column" }}>
                    <h2>Welcome, first-name</h2>
                    <Button onClick={() => this.setState({ addAccountShow: true })} style={{
                        marginTop: "20px",
                        width: "40px"
                    }}><strong>+</strong></Button>
                    <AddAccounts
                        show={this.state.addAccountShow}
                        onHide={addAccountClose}
                        handler={this.handler} />
                </div>
            </div>
        )
    }
}

export default Home;