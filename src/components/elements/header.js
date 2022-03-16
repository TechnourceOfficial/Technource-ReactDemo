import React, { Component} from "react";
import Logo from '../../images/technource-logo.png';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../css/style.css';
import 'font-awesome/css/font-awesome.min.css';
import {Navbar,NavDropdown,Container,Nav, Row, Col} from 'react-bootstrap';
import config from "../shared/constant";
class Header extends Component{
    render(){
        function myFunction() {            
            document.getElementById("myDropdown").classList.toggle("show");
          }
        return(
            
            <>
                <Navbar bg="light" expand="lg" className="sticky-top">
                    <Container>
                            <Navbar.Brand href={config.DOMAIN}><img src={Logo} className="technource-top-logo" alt="logo" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav " />
                            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                                <Nav className="nav-menu">
                                    <div className="megamenu">
                                        <div className="dropdown fw-bold nav-link">
                                            <a href={config.DOMAIN}>Hire Expert</a>
                                            <span className="dropbtn" onClick={myFunction}><FontAwesomeIcon className="fa-arrow" icon={faCaretDown}/></span>
                                                <div id="myDropdown" className="dropdown-content">
                                                    <div className="header">
                                                            <Row>
                                                                 <Col  md={6} xs={12} >
                                                                    <ul className="list-unstyled">
                                                                        <li><span className="css-sprite-menuic_hire_Android"></span><NavDropdown.Item href={config.DOMAIN+"/hire-android-app-developer/"}>Hire Android Developer</NavDropdown.Item></li>
                                                                        <li><span className="css-sprite-menuic_hire_Angular"></span><NavDropdown.Item href={config.DOMAIN+"/hire-angular-js-developer/"}>Hire Angular Js Developer</NavDropdown.Item></li>
                                                                        <li><span className="css-sprite-menuic_hire_iOS"></span><NavDropdown.Item href= {config.DOMAIN+"/hire-ios-app-developer/"}>Hire iOS Developer</NavDropdown.Item></li>
                                                                        <li><span className="css-sprite-menuic_hire_Magento"></span><NavDropdown.Item href={config.DOMAIN+"/hire-magento-developer/"}>Hire Magento Developer</NavDropdown.Item></li>
                                                                        <li><span className="css-sprite-menuic_hire_NodeJS"></span><NavDropdown.Item href={config.DOMAIN+"/hire-node-js-developer/"}>Hire Node Js Developer</NavDropdown.Item></li>
                                                                    </ul>
                                                                 </Col>
                                                                 <Col  md={6} xs={12}>
                                                                    <ul className="list-unstyled">
                                                                        <li><span className="css-sprite-menuic_hire_PHP"></span><NavDropdown.Item href={config.DOMAIN+"/hire-php-developer/"}>Hire PHP Developer</NavDropdown.Item></li>
                                                                        <li><span className="css-sprite-menuic_hire_React"></span><NavDropdown.Item href= {config.DOMAIN+"/hire-react-native-developer/"}>Hire Reactnative Developer</NavDropdown.Item></li>
                                                                        <li><span className="css-sprite-menuic_hire_SEO"></span><NavDropdown.Item href={config.DOMAIN+"/hire-seo-expert/"}>Hire SEO Expert</NavDropdown.Item></li>
                                                                        <li><span className="css-sprite-menuic_hire_Shopify"></span><NavDropdown.Item href={config.DOMAIN+"/hire-shopify-expert/"} >Hire Shopify Developer</NavDropdown.Item></li>
                                                                        <li><span className="css-sprite-menuic_hire_Wordpress"></span><NavDropdown.Item href= {config.DOMAIN+"/hire-wordpress-developer/"}>Hire Wordpress Developer</NavDropdown.Item></li>
                                                                    </ul>
                                                                </Col>
                                                    
                                                            </Row>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                    <Nav.Link className="fw-bold" href={config.DOMAIN+"/blog/"}>Blog</Nav.Link>
                                    <Nav.Link className="fw-bold" href={config.DOMAIN+"/our-case-studies/"}>Case Study</Nav.Link>
                                    <Nav.Link className="fw-bold" href={config.DOMAIN+"/contact-us/"}>Contact</Nav.Link>                                    
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;