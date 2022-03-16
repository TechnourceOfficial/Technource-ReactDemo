import React, { Component} from "react";
import ReactDOM from 'react-dom';
import {Container,Row,Col} from 'react-bootstrap';

class ExpertTalk extends Component{
    render(){
        return(
            <>
            <section className="talk_expert py-5">
                <Container>
                    <Row>
                        <Col lg={7} xl={6} className='mb-4 mb-lg-0'>
                            <h2 className="section_title mb-3"><strong>Who</strong> We Are</h2>
                            <p>Technource is a <strong>software development company </strong> that delivers website and mobile app development services to business professionals globally. Our competent team is master in a wide range of current technologies. Our clients just share their ideas and it’s our responsibility to deliver the results. We take Quality On-time, and On-Budget completion of assignments as our top priority.</p>
                            <p>We will share your job, understand you and your business ecosystem, brainstorm, and then shape your dream together. Technource, powered by its <a href="https://www.technource.com/development-method-agile/"><strong>Agile development processes</strong></a> always ensures Quality, Performance, Appeal, and Business for you &amp; deliver premium IT solutions.</p>
                            <p>We are trusted by entrepreneurs, enterprises, and charitable organizations for both web and mobile app development, we have delivered over <strong>1000+ successful projects.</strong> We have worked for various niches and industries.</p>
                            <p>We have efficient developers who can work with different technologies. It makes the front-end and back-end development easy and accurate for the developers, and they can deliver a <strong>scalable app and website on time.</strong></p>
                            <p>Our development team ensures Quality, Performance, Appeal and Business for you and provides highly interactive and data-intensive <strong>software solutions to small to big enterprises</strong>. Thus, we have clients from different countries like the USA, Canada, Australia, Malaysia, and India.</p>
                        </Col>
                        <Col lg={5} xl={6}>
                            
                        </Col>
                    </Row>
                </Container>   
            </section>
            </>
        );
    }
}

export default ExpertTalk;