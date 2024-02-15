import React from 'react';
import Header from './header'; 
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import animals from '../db/animal.json'; 
import './gallery.css';

const imagePath = process.env.PUBLIC_URL + '/img/';

const AdoptionGallery = () => {
    return (
        <div>
            <Header title="Adoption Gallery" subtitle="Find your new best friend!" />
            <div className="gallery-container"> {/* Use a container to control padding and max-width */}
                <Row xs={1} md={3} className="g-4">
                    {Object.values(animals).flat().map((animal, idx) => (
                        <Col key={idx}>
                            <Card className="animal-card"> {/* Add a class for styling */}
                                <Card.Img variant="top" src={imagePath + animal.image_url} className="animal-image" />
                                <Card.Body>
                                    <Card.Title>{animal.name}</Card.Title>
                                    <Card.Text>
                                        Gender: {animal.gender}<br />
                                        Age: {animal.age} years
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default AdoptionGallery;
