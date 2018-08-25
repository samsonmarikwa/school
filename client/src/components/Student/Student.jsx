import React, { Component } from "react";
import { Grid, PageHeader, Form, Col, Row, Panel, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";


export default class Student extends Component {
    state = {
        studentId:"",
        studentName:"",
        articleId:"",
        articleTitle:"",
        article:""
    };

    change = e => {
        this.setState({
           [e.target.name]: e.target.value
        });
     };

     onDownload = e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            studentId:"",
            studentName:"",
            articleId:"",
            articleTitle:"",
            article:""
        });
     }; 

    render() {
        return (


            <Grid>

            <PageHeader>Student Article</PageHeader>
            <Panel>
                <Panel.Heading/>
                <Panel.Body>
            <Form horizontal>
            <FormGroup controlId="formStudentId">
               <Col componentClass={ControlLabel} sm={2}>Student Id:</Col>
               <Col sm={3}>
                  <FormControl
                     type="text"
                     name="studentId"
                     placeholder="Student Id"
                     value={this.state.studentId}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>
               <Col componentClass={ControlLabel} sm={2}>Student Name:</Col>
               <Col sm={3}>
                  <FormControl
                     type="text"
                     name="studentName"
                     placeholder="Student Name"
                     value={this.state.studentName}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>
               <Col sm={2}></Col>
            </FormGroup>

            <FormGroup controlId="formArticleId">
            <Col componentClass={ControlLabel} sm={2}>Article Id:</Col>
            <Col sm={3}>
            <FormControl
             componentClass="select" 
             placeholder="select"
             value={this.state.articleId}
             onChange={e => this.change(e)}
             required>
            <option value="select">Select Article</option>
            <option value="other">...</option>
            </FormControl>
            </Col>
            <Col componentClass={ControlLabel} sm={2}>Article Title:</Col>
               <Col sm={3}>
                  <FormControl
                     type="text"
                     name="articleTitle"
                     placeholder="Article Title"
                     value={this.state.articleTitle}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>
            <Col sm={2}></Col>
            </FormGroup>
            <FormGroup>
                <Col sm={2}></Col>
               <Col sm={8}>
               <iframe src="" height="400" width="100%"></iframe>
   
               </Col>
               <Col sm={2}></Col>
            </FormGroup>
            <FormGroup>
                <Col sm={4}></Col>
               <Col sm={4}>
                  <Button onClick={e => this.onDownload(e)} block>Download</Button>
               </Col>
               <Col sm={4}></Col>
            </FormGroup>
            </Form>
            </Panel.Body>    
            </Panel>


            </Grid>
        )
    }
}