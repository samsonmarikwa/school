import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Col, ControlLabel, Button, Radio } from 'react-bootstrap';
import API from "../../utils/API";

import './Register.css';

export default class Register extends Component {

   state= {
    personId: 0,
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    cellphone: "",
    userType: "Student",
    subjects: [],
    terms: "",
    startDate:""
   };

   change = e => {
      this.setState({
         [e.target.name]: e.target.value
      });
   };

   subjectsChange = e => {

      var options = e.target.options;
      var value= [];
      for (var i=0; i < options.length; i++) {
         if (options[i].selected) {
           value.push(options[i].value);
         }
      }

      this.setState({subjects : value});
   }

   onSubmit = e => {
      e.preventDefault();
//      console.log(this.state);
      var schoolData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        email: this.state.email,
        startDate: this.state.startDate,
        subjects: this.state.subjects,
        terms: this.state.terms,
        cellphone: this.state.cellphone,
        userType: this.state.userType
      }
      API.savePersonRecord(schoolData)
        .then(res => this.setState({personId: res.data.personId}))
        .catch(err => console.log(err));

      this.setState({
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: "",
        cellphone: "",
        userType: "Student",
        subjects: [],
        terms: "",
        startDate:""
      });
   };

   onCancel = e => {
//      console.log(this.state);
      this.setState({
         firstName: "",
         lastName: "",
         password: "",
         confirmPassword: "",
         email: "",
         cellphone: "",
         userType: "Student",
         subjects: [],
         terms: "",
         startDate:""
      });
   }

   render() {
      return (
         <Form horizontal>
            <div className="page-hdr">
               <h4>User Registration</h4>
            </div>
            <br />

            <FormGroup controlId="formPersonId">
               <Col componentClass={ControlLabel} sm={2}>Person Id:</Col>
               <Col sm={3}>
                  <FormControl
                     type="text"
                     name="personId"
                     placeholder="Person Id"
                     value={this.state.personId}
                     disabled
                  />
               </Col>
               <Col sm={2}></Col>
               <Col sm={3}></Col>
               <Col sm={2}></Col>
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

            <FormGroup controlId="formPasswords">
               <Col componentClass={ControlLabel} sm={2}>Password:</Col>
               <Col sm={3}>
                  <FormControl
                     type="password"
                     name="password"
                     placeholder="Password"
                     value={this.state.password}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>
               <Col componentClass={ControlLabel} sm={2}>Confirm Password:</Col>
               <Col sm={3}>
                  <FormControl
                     type="password"
                     name="confirmPassword"
                     placeholder="Password"
                     value={this.state.confirmPassword}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>
               <Col sm={2}></Col>
            </FormGroup>

            <FormGroup controlId="formContacts">
               <Col componentClass={ControlLabel} sm={2}>EMail:</Col>
               <Col sm={3}>
                  <FormControl
                     type="email"
                     name="email"
                     placeholder="E-Mail"
                     value={this.state.email}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>

               <Col componentClass={ControlLabel} sm={2}>Cellphone:</Col>
               <Col sm={3}>
                  <FormControl
                     type="text"
                     name="cellphone"
                     placeholder="Cell Phone"
                     value={this.state.cellphone}
                     onChange={e => this.change(e)}
                  />
               </Col>
               <Col sm={2}></Col>
            </FormGroup>

            <FormGroup controlId="formUserTypeSubjects">
                <Col componentClass={ControlLabel} sm={2}>User Type:</Col>
                <Col sm={3}>
                  <Radio name="userType" value="Student" defaultChecked checked={this.state.userType==="Student"} onChange={e => this.change(e)} inline>Student</Radio>{'  '}
                  <Radio name="userType" value="Educator" checked={this.state.userType==="Educator"} onChange={e => this.change(e)} inline>Educator</Radio>
                </Col>

                <Col componentClass={ControlLabel} sm={2}>Subject:</Col>
                <Col sm={3}>
                  <FormControl componentClass="select" name="subjects" multiple value={this.state.value} onChange={this.subjectsChange}>
                    <option value="Javascript">Javascript</option>
                    <option value="NodeJS">Node JS</option>
                    <option value="MongoDB">MongoDB</option>
                    <option value="HandleBars">HandleBars</option>
                  </FormControl>
                </Col>
              <Col sm={2}></Col>
            </FormGroup>

            <FormGroup controlId="formTermsAndConditions">
              <Col componentClass={ControlLabel} sm={2}>Terms and Conditions:</Col>
                <Col sm={8}> 
                  <div  className="terms-border">
                    <div className="terms"><p><strong>Terms and Conditions</strong><br/><br/>
                      Terms and Conditions to be populated depending on whether user is an educator or a student. For now, I put Lorem Ipsum Velit reprehenderit et sunt sint eiusmod qui ut enim. Proident voluptate qui sunt incididunt anim irure mollit labore. Qui amet cillum est sit quis consequat. Anim aliqua consequat magna velit id ut eiusmod commodo minim ex consequat deserunt excepteur. Ullamco aliquip veniam proident sunt ipsum culpa cillum in esse consectetur minim ex do. Laborum excepteur commodo fugiat aliqua reprehenderit elit excepteur anim proident mollit voluptate duis.<br/><br/>
                      
                      
                      Elit cillum cupidatat ex sit ullamco ut veniam minim esse cillum. Irure irure minim velit consectetur est minim occaecat velit voluptate fugiat. Magna id commodo proident dolore adipisicing cillum voluptate voluptate excepteur ut. Aliquip eu ipsum anim labore ullamco esse nulla nostrud occaecat amet. Mollit occaecat est sunt sunt. Ex ex commodo nulla nulla labore sunt tempor quis cupidatat ut veniam. Ut eu minim laborum cillum amet fugiat ad dolore cillum. Ad deserunt ea ad laboris sint laborum laboris culpa anim dolore sint. Excepteur ipsum cupidatat ex aliquip eu pariatur pariatur ex laborum dolor incididunt commodo. Non sint eiusmod labore eu ullamco velit nulla in deserunt ea fugiat elit deserunt adipisicing. Enim quis aliquip nulla aliqua Lorem eiusmod esse magna anim.<br/><br/>
                      
                      
                      Dolore commodo sunt proident eu do ex ut incididunt eiusmod. Consequat pariatur aute aliquip deserunt. Amet excepteur adipisicing cillum fugiat. Dolor quis cillum deserunt est excepteur aliquip enim non elit excepteur duis velit. Nulla in Lorem quis eu consequat reprehenderit quis laborum aliquip.Duis occaecat elit labore labore aliquip elit nostrud tempor quis qui et magna commodo voluptate. Quis ut officia ullamco qui esse. Consequat occaecat incididunt incididunt ad proident ut veniam minim nulla deserunt ut aute.</p>
                    </div>
                  </div>
                </Col>
              <Col sm={2}></Col>
            </FormGroup>

            <FormGroup controlId="formTermsAccept">
               <Col componentClass={ControlLabel} sm={2}>Terms and Conditions:</Col>
               <Col sm={3}>
                  <Radio name="terms" value="Accepted" checked={this.state.terms==="Accepted"} onChange={e =>this.change(e)}>Accept</Radio>
                  <Radio name="terms" value="Declined" checked={this.state.terms==="Declined"} onChange={e =>this.change(e)}>Decline</Radio>
               </Col>
            </FormGroup>

            <FormGroup controlId="formStartDate">
               <Col componentClass={ControlLabel} sm={2}>Date Available To Start:</Col>
               <Col sm={2}>
                  <FormControl
                     type="date"
                     name="startDate"
                     value={this.state.startDate}
                     onChange={e => this.change(e)}
                     required
                  />
               </Col>
               <Col sm={8}></Col>
            </FormGroup>

            <FormGroup>
               <Col sm={5}></Col>
               <Col sm={1}>
                  <Button bsStyle="primary" onClick={e => this.onSubmit(e)}>Submit</Button>
               </Col>
               <Col sm={1}>
                  <Button bsStyle="primary" onClick={e => this.onCancel(e)}>Cancel</Button>
               </Col>
               <Col smOffset={5}></Col>
            </FormGroup>
         </Form>
      );
   }
}
