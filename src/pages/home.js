import React from 'react';
import { Accordion } from 'react-bootstrap';
import Header from './header';
import './home.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const imagePath = process.env.PUBLIC_URL + '/img/';

const Home = () => {
    const navigate = useNavigate();

    const goToGallery = () => {
        navigate('/gallery');
    };

    return (
        <div>
            <Header title="Pet Heaven" subtitle="Adopting a pet can change both your worlds." />

            <div className="info-section">
                <div className="text-content">
                    <h2>Adoption Gallery</h2>
                    <p>Discover our wide variety of adorable pets looking for a forever home. You can make a huge difference in their lives.</p>
                    <Button variant="primary" onClick={goToGallery}>Adoption Gallery</Button>
                </div>
                <div className="image-content">
                    <img src={imagePath + "dog_1.jpg"} alt="Adoptable Pet" />
                </div>
            </div>

            <div className="accordion-container">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How to Adopt</Accordion.Header>
                        <Accordion.Body>
                            Adopting a pet from our shelter is a fulfilling experience. Start by browsing through our online gallery. When you find a pet you are interested in, submit an adoption application form. Our team will then get in touch with you to discuss the next steps, including a meet-and-greet session.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Things To Note</Accordion.Header>
                        <Accordion.Body>
                            When adopting a pet, consider that it's a lifelong commitment. Make sure your lifestyle and household are prepared for a new furry friend. Remember that pets require your time, attention, and love in addition to the financial responsibility.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Adoption Fees</Accordion.Header>
                        <Accordion.Body>
                            Our adoption fees vary depending on the type of animal. This fee includes vaccinations, microchipping, spaying/neutering, and a veterinary check-up. The fees help us cover these medical expenses and support our shelter operations.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>FAQ</Accordion.Header>
                        <Accordion.Body>
                            Our FAQ section provides answers to common questions about the adoption process, pet care, and how you can get involved with our shelter. Whether you're a first-time pet owner or looking to add to your pet family, we're here to support you.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Home;
