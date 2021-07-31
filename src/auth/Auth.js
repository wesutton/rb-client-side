import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import './Auth.css'
import Login from './Login'
import Signup from './Signup'



const Auth = (props) => {

    return (
    <div className = "auth-background">
       <Container className = "auth-container">
           <Row>
               <Col md = "6">
                <Login updateToken = {props.updateToken} />
               </Col>
               <Col md = "6" className="login-col">
               <Signup updateToken = {props.updateToken} />
               </Col>
           </Row>
       </Container>
       </div>
    )
}

export default Auth;