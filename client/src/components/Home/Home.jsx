import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import './Home.css';

export default class Home extends Component {
   render() {
      return (
         <Grid>
            <Jumbotron className="jumbotron">
               <Image src="assets/img/graduation.jpg" width="100%" height="300px"/>
               <div className="homepage">
                  <h3>Welcome to Virtual School</h3>
                  <p>We deliver superior educative content with specialized subjects covering high school education, college, technical, business, life-oriented topics on issues such as dating, pregnancy and parenting. We have some of the best educators dedicated to sharing their knowledge.
                  </p>

               </div>
            </Jumbotron>

            <Carousel infiniteLoop autoPlay showThumbs={false} interval={5000} centerMode centerSlidePercentage={50} emulateTouch>
               <div>
                  <img src="assets/img/person-1.jpg" alt="person-1" width="15%" height="300px"/>
                  <p className="legend">Legend 1</p>
               </div>
               <div>
                  <img src="assets/img/person-2.jpg" alt="person-2" width="15%" height="300px"/>
                  <p className="legend">Legend 2</p>
               </div>
               <div>
                  <img src="assets/img/person-3.jpg" alt="person-3" width="15%" height="300px"/>
                  <p className="legend">Legend 3</p>
               </div>
               <div>
                  <img src="assets/img/person-4.jpg" alt="person-4" width="15%" height="300px"/>
                  <p className="legend">Legend 4</p>
               </div>
               <div>
                  <img src="assets/img/person-5.jpg" alt="person-5" width="15%" height="300px"/>
                  <p className="legend">Legend 5</p>
               </div>
               <div>
                  <img src="assets/img/person-6.jpg" alt="person-6" width="15%" height="300px"/>
                  <p className="legend">Legend 6</p>
               </div>
               <div>
                  <img src="assets/img/person-7.jpg" alt="person-7" width="15%" height="300px"/>
                  <p className="legend">Legend 7</p>
               </div>
               <div>
                  <img src="assets/img/person-8.jpg" alt="person-8" width="15%" height="300px"/>
                  <p className="legend">Legend 8</p>
               </div>
               <div>
                  <img src="assets/img/person-9.jpg" alt="person-9" width="15%" height="300px"/>
                  <p className="legend">Legend 9</p>
               </div>
               <div>
                  <img src="assets/img/person-10.jpg" alt="person-10" width="15%" height="300px"/>
                  <p className="legend">Legend 10</p>
               </div>
               <div>
                  <img src="assets/img/person-11.jpg" alt="person-11" width="15%" height="300px"/>
                  <p className="legend">Legend 11</p>
               </div>

            </Carousel>

            <Row className="show-gridtext-center">
               <Col xs={4} sm={3} className="person-wrapper">
                  <Image src="assets/img/person-1.jpg" circle className="profile-pic" />
                  <h3>Samson</h3>
                  <p>Officia ullamco laborum id esse dolor incididunt ullamco nostrud occaecat id commodo cillum deserunt do. Officia commodo est consequat sunt ea anim ea eiusmod eiusmod.</p>
               </Col>
               <Col xs={4} sm={3} className="person-wrapper">
                  <Image src="assets/img/person-2.jpg" circle className="profile-pic" />
                  <h3>Samson</h3>
                  <p>Officia ullamco laborum id esse dolor incididunt ullamco nostrud occaecat id commodo cillum deserunt do. Officia commodo est consequat sunt ea anim ea eiusmod eiusmod.</p>
               </Col>
               <Col xs={4} sm={3} className="person-wrapper">
                  <Image src="assets/img/person-3.jpg" circle className="profile-pic" />
                  <h3>Samson</h3>
                  <p>Officia ullamco laborum id esse dolor incididunt ullamco nostrud occaecat id commodo cillum deserunt do. Officia commodo est consequat sunt ea anim ea eiusmod eiusmod.</p>
               </Col>
               <Col xs={4} sm={3} className="person-wrapper">
                  <Image src="assets/img/person-4.jpg" circle className="profile-pic" />
                  <h3>Samson</h3>
                  <p>Officia ullamco laborum id esse dolor incididunt ullamco nostrud occaecat id commodo cillum deserunt do. Officia commodo est consequat sunt ea anim ea eiusmod eiusmod.</p>
               </Col>
               <Col xs={4} sm={3} className="person-wrapper">
                  <Image src="assets/img/person-5.jpg" circle className="profile-pic" />
                  <h3>Samson</h3>
                  <p>Officia ullamco laborum id esse dolor incididunt ullamco nostrud occaecat id commodo cillum deserunt do. Officia commodo est consequat sunt ea anim ea eiusmod eiusmod.</p>
               </Col>
               <Col xs={4} sm={3} className="person-wrapper">
                  <Image src="assets/img/person-6.jpg" circle className="profile-pic" />
                  <h3>Samson</h3>
                  <p>Officia ullamco laborum id esse dolor incididunt ullamco nostrud occaecat id commodo cillum deserunt do. Officia commodo est consequat sunt ea anim ea eiusmod eiusmod.</p>
               </Col>
               <Col xs={4} sm={3} className="person-wrapper">
                  <Image src="assets/img/person-7.jpg" circle className="profile-pic" />
                  <h3>Samson</h3>
                  <p>Officia ullamco laborum id esse dolor incididunt ullamco nostrud occaecat id commodo cillum deserunt do. Officia commodo est consequat sunt ea anim ea eiusmod eiusmod.</p>
               </Col>
               <Col xs={4} sm={3} className="person-wrapper">
                  <Image src="assets/img/person-8.jpg" circle className="profile-pic" />
                  <h3>Samson</h3>
                  <p>Officia ullamco laborum id esse dolor incididunt ullamco nostrud occaecat id commodo cillum deserunt do. Officia commodo est consequat sunt ea anim ea eiusmod eiusmod.</p>
               </Col>
               <Col xs={4} sm={3} className="person-wrapper">
                  <Image src="assets/img/person-9.jpg" circle className="profile-pic" />
                  <h3>Samson</h3>
                  <p>Officia ullamco laborum id esse dolor incididunt ullamco nostrud occaecat id commodo cillum deserunt do. Officia commodo est consequat sunt ea anim ea eiusmod eiusmod.</p>
               </Col>
               <Col xs={4} sm={3} className="person-wrapper">
                  <Image src="assets/img/person-10.jpg" circle className="profile-pic" />
                  <h3>Samson</h3>
                  <p>Officia ullamco laborum id esse dolor incididunt ullamco nostrud occaecat id commodo cillum deserunt do. Officia commodo est consequat sunt ea anim ea eiusmod eiusmod.</p>
               </Col>
               <Col xs={4} sm={3} className="person-wrapper">
                  <Image src="assets/img/person-11.jpg" circle className="profile-pic" />
                  <h3>Samson</h3>
                  <p>Officia ullamco laborum id esse dolor incididunt ullamco nostrud occaecat id commodo cillum deserunt do. Officia commodo est consequat sunt ea anim ea eiusmod eiusmod.</p>
               </Col>

            </Row>

         </Grid>
      )
   }
}