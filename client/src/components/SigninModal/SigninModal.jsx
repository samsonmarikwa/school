import React, { Component } from "react";
import { Panel, Col, Form, FormGroup, FormControl, ControlLabel, Checkbox, Button, Modal, NavItem } from "react-bootstrap";
import './SigninModal.css';

export default class SigninModal extends Component {
    constructor(props, context){
        super(props, context);
   

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

    this.state = {
        userName:"",
        password:"",
        show: false
    };

};    

    close = () => {
        this.setState({
            show: false
        });
    }

    open = () => {
        this.setState({
            show: true
        });
       
    }

    change = e => {
        this.setState({
           [e.target.name]: e.target.value
        });
     };

     onSignIn = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
          userName:"",
          password:""
        });
     };


  render() {
    return(
        

                <div>
                    {/* change button to person icon */}
                 <a onClick={this.open}>Sign In</a>   
                    <Modal show={this.state.show} onHide={this.close}>
                    <Modal.Header closeButton>
                    {/* <Modal.Title>Sign In</Modal.Title> */}
                    </Modal.Header>
                    <Modal.Body>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                     <Panel.Title componentClass="h3">Sign In</Panel.Title>
                    </Panel.Heading>    

                    <Panel.Body>
                        <Form horizontal>
                        <FormGroup controlId="formUserName">
                        <Col componentClass={ControlLabel} sm={2}>
                        Username:
                        </Col>
                        <Col sm={8}>
                        <FormControl 
                        type="text" 
                        placeholder="Enter Username"
                        name="userName"
                        value={this.state.userName}
                        onChange={e => this.change(e)}
                        required />
                        </Col>

                        </FormGroup>
                        <FormGroup controlId="formPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                        Password:
                        </Col>
                        <Col sm={8}>
                        <FormControl 
                        type="text" 
                        placeholder="Enter Password"
                        name="password"
                        value={this.state.password}
                        onChange={e => this.change(e)}
                         />
                        </Col>
                        </FormGroup>  
                        <hr/>
                        <FormGroup>
                        <Col smOffset={2} sm={10}>
                        <Checkbox>Remember Me</Checkbox>
                        </Col>
                        </FormGroup>

                          <FormGroup>
                            <Col smOffset={2} sm={10}>
                            <Button onClick={e => this.onSignIn(e)} bsStyle="default">Sign In</Button>
                            <Button bsStyle="link" style={{textDecorationLine:"none" }}>Can't Access Your Account?</Button>
                            </Col>
                            </FormGroup>  
                        </Form>
                    
                    </Panel.Body>
                </Panel>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>

    )      
  }  
}