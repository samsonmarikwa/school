import React, { Component } from "react";
import { Grid, PageHeader, Form, Col, Row, Panel, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";


export default class StudentLiveSession extends Component {

    state = {
      sessionId:"",
      sessionTitle:""  
    }

    render() {
        return (
            <Grid>

            <PageHeader>Student Live Session</PageHeader>
            <Panel>
                <Panel.Heading/>
                <Panel.Body>
            <Form horizontal>
            <FormGroup controlId="formsessionId">
               <Col componentClass={ControlLabel} sm={2}>Live Session Id:</Col>
               <Col sm={3}>
                  <FormControl
                     type="text"
                     name="sessionId"
                     placeholder="Session Id"
                     value={this.state.sessionId}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>
               <Col componentClass={ControlLabel} sm={2}>Session Title:</Col>
               <Col sm={3}>
                  <FormControl
                     type="text"
                     name="sessionTitle"
                     placeholder="Student Name"
                     value={this.state.sessionTitle}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>
               <Col sm={2}></Col>
               </FormGroup>
               </Form>
               </Panel.Body>
               </Panel>
               </Grid>
        )
    }
}