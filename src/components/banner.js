import React from 'react';
import Homebanner from'../images/top-banner-img-.png';
import ReactDOM from 'react-dom';
import {Container,Row,Col} from 'react-bootstrap';

function banner(){
    return(
        <>
        <section className='home_banner position-relative'>
            <Container>
                <Row className='align-items-center'>
                    <Col md="8">
                        <h1 className='sub_title text-white mb-0 mainsubtitle'>Ultimate <strong>digitization</strong>
                        <br/>
                        <b>with cutting edge <strong>technologies</strong></b></h1>
                        <p className='text-white mt-4'>Technource started a decade back as a <strong>web and mobile application development company</strong> with a vision of solving complex business problems with ingenious software applications, and evolved to be a serious contender in Augmented Reality, Artificial intelligence, blockchain and IoT services to change the world rapidly. With innovation being our core value throughout, we always strived to deliver quality solutions to support your business ecosystem through Agile development methodology and best in class technical competence. We at Technource, with our tailor made approaches for your every requirement, are an automatic choice as a partner in your journey to ultimate digitization.</p>
                        <a href="#request_form" id="discuss_btn" className='theme_btn mt-2'>Let's talk</a>  
                    </Col>
                    <Col md="4" className='text-center'>  
                        <img src={Homebanner} width="350" height="349" alt="Web and Mobile Development Company"/>
                    </Col>
                </Row>
            </Container>
        </section>    
        </>

    );
}

export default banner;