import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button, Radio, Popover, OverlayTrigger } from 'react-bootstrap';
import Iframe from 'react-iframe';

import './EducationArticle.css';

export default class EducationArticle extends Component {



   state= {
      personId: "",
      firstName: "",
      lastName: "",
      articleId: "",
      articleTitle: "",
      filename: "",
      notifyStudents: "Yes"
   };

   change = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   onSubmit = e => {
      e.preventDefault();
      // this.props.onSubmit(this.state);
      console.log(this.state);
      this.setState({
        personId: "",
        firstName: "",
        lastName: "",
        articleId: "",
        articleTitle: "",
        filename: "",
        notifyStudents: "Yes"
      });
   };

   onCancel = e => {
      console.log(this.state);
      this.setState({
        personId: "",
        firstName: "",
        lastName: "",
        articleId: "",
        articleTitle: "",
        filename: "",
        notifyStudents: "Yes"
      });
   }

   render() {

      const popoverRight = (
        <Popover id="popover-positioned-right" title="URL Link">
          Put a link to web-based content such as Google Docs shared link and Youtube embed link.
        </Popover>
      );
      return (
         <Form horizontal>
            <div className="page-hdr">
               <h4>Education Article</h4>
            </div>
            <br />
            
            <FormGroup controlId="formEducator">
               <Col componentClass={ControlLabel} sm={2}>Educator Id:</Col>
               <Col sm={3}>
                  <FormControl
                     type="text"
                     name="personId"
                     value={this.state.personId}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>
               <Col sm={7}></Col>
            </FormGroup>

            <FormGroup controlId="formPersonName">
               <Col componentClass={ControlLabel} sm={2}>First Name:</Col>
               <Col sm={3}>
                  <FormControl
                     type="text"
                     name="firstName"
                     placeholder="First name"
                     value={this.state.firstName}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>
               <Col componentClass={ControlLabel} sm={2}>Last Name:</Col>
               <Col sm={3}>
                  <FormControl
                     type="text"
                     name="lastName"
                     placeholder="Last name"
                     value={this.state.lastName}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>
               <Col sm={2}></Col>
            </FormGroup>

            <FormGroup controlId="formArticle">
               <Col componentClass={ControlLabel} sm={2}>Article Id:</Col>
               <Col sm={3}>
                  <FormControl
                     type="text"
                     name="articleId"
                     placeholder="Article Id"
                     value={this.state.articleId}
                     onChange={e => this.change(e)}
                     required
                  />
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

            <FormGroup controlId="formFilename">
               <Col componentClass={ControlLabel} sm={2}>Article URL link</Col>
               <Col sm={3}>
               <OverlayTrigger trigger={["click","focus","hover"]} placement="right" overlay={popoverRight}>
                  <FormControl
                     type="text"
                     name="filename"
                     placeholder="URL Link"
                     value={this.state.filename}
                     onChange={e => this.change(e)}
                     required
                  />

              </OverlayTrigger>
               </Col>
               <Col sm={7}></Col>
            </FormGroup>

            <FormGroup controlId="formNotifyStudents">
                <Col componentClass={ControlLabel} sm={2}>Notify Students Now:</Col>
                <Col sm={3}>
                  <Radio name="notifyStudents" value="Yes" defaultChecked checked={this.state.notifyStudents==="Yes"} onChange={e => this.change(e)}>Yes</Radio>
                  <Radio name="notifyStudents" value="No" checked={this.state.notifyStudents==="No"} onChange={e => this.change(e)}>No</Radio>
                </Col>
              <Col sm={7}></Col>
            </FormGroup>
            <FormGroup>
               <Col sm={5}></Col>
               <Col sm={1}>
                  <Button bsStyle="primary" onClick={e => this.onSubmit(e)}>Save</Button>
               </Col>
               <Col sm={1}>
                  <Button bsStyle="primary" onClick={e => this.onCancel(e)}>Cancel</Button>
               </Col>
               <Col smOffset={5}></Col>
            </FormGroup>
            
            <FormGroup controlId="formIframe">
               <Col smOffset={1}>
                  <Iframe url = {this.state.filename}
                    className="iframe"
                    height="450px"
                    display="initial"
                    position="relative"
                    allowFullScreen
                  />
               </Col>
            </FormGroup>

         </Form>
      );
   }
}
