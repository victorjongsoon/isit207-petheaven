import React from 'react';
import Header from './header'; // Import the Header component
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import animals from '../db/animal.json'; // Make sure the path to your animal.json is correct

const imagePath = process.env.PUBLIC_URL + '/img/';

const AdoptionGallery = () => {
    return (
        <div>
            <Header title="Adoption Gallery" subtitle="Find your new best friend!" />
            <Row xs={1} md={3} className="g-4">
                {Object.values(animals).flat().map((animal, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={imagePath + animal.image_url} />
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
    );
};

export default AdoptionGallery;
