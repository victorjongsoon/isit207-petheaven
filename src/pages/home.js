import React from 'react';
import { Accordion } from 'react-bootstrap';
import Header from './header';
import './home.css';
import { Button } from 'react-bootstrap';

const imagePath = process.env.PUBLIC_URL + '/img/';

const Home = () => {
    return (
        <div>
            {/* Background image section */}
            <Header title="Pet Heaven" subtitle="Adopting a pet can change both your worlds." />

            {/* New section with title/description on the left and image on the right */}
            <div className="info-section">
                <div className="text-content">
                    <h2>Adoption Gallery</h2>
                    <p>Thank you for your interest in adopting an animal! All visits are now by appointment only and slots will only be released 7 days beforehand. Book an appointment.</p>
                    <Button variant="primary">Adoption Gallery</Button>
                </div>
                <div className="image-content">
                    <img src={imagePath + "dog_1.jpg"} alt="Adoptable Pet" />
                </div>
            </div>

            {/* Accordion section */}
            <div className="accordion-container">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How to Adopt</Accordion.Header>
                        <Accordion.Body>
                            {/* Content for How to Adopt */}
                            Step 1: Browse our adoption gallery ...
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Things To Note</Accordion.Header>
                        <Accordion.Body>
                            {/* Content for Things To Note */}
                            Due to the high volume of adoption requests ...
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Adoption Fees</Accordion.Header>
                        <Accordion.Body>
                            {/* Content for Things To Note */}
                            Adoption Fee...
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>FAQ</Accordion.Header>
                        <Accordion.Body>
                            {/* Content for Things To Note */}
                            FAQ...
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Home;
