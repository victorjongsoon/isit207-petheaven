import React, { useState } from 'react';
import Header from './header';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import animals from '../db/animal.json';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './gallery.css';

const imagePath = process.env.PUBLIC_URL + '/img/';

const AdoptionGallery = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('All');
    const [age, setAge] = useState('All');
    const [gender, setGender] = useState('All');

    // Handlers for search and filter
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const getAgeCategory = (age) => {
        if (age >= 1 && age <= 2) {
            return "Kitten/Puppy";
        } else if (age >= 3 && age <= 4) {
            return "Adult";
        } else if (age >= 5) {
            return "Senior";
        }
    };

    // Filter animals based on search and filter criteria
    const filteredAnimals = Object.values(animals).flat().filter(animal => {
        const animalAgeCategory = getAgeCategory(animal.age);
        return (
            (category === 'All' || animal.type === category) &&
            (age === 'All' || animalAgeCategory === age) &&
            (gender === 'All' || animal.gender === gender) &&
            animal.name.toLowerCase().includes(searchQuery)
        );
    });

    return (
        <div>
            <Header title="Adoption Gallery" subtitle="Find your new best friend!" />
            <div className='gallery-container'>
                {/* Search and filter bar */}
                <Form className="d-flex justify-content-between my-4">
                    <Form.Control
                        type="search"
                        placeholder="Search..."
                        className="me-2"
                        aria-label="Search"
                        onChange={handleSearchChange}
                    />
                    <Dropdown onSelect={setCategory}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Categories: {category}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="All">All</Dropdown.Item>
                            <Dropdown.Item eventKey="Cat">Cats</Dropdown.Item>
                            <Dropdown.Item eventKey="Dog">Dogs</Dropdown.Item>
                            <Dropdown.Item eventKey="Hamster">Hamsters</Dropdown.Item>
                            <Dropdown.Item eventKey="Rabbit">Rabbits</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <DropdownButton title={`Age: ${age === 'All' ? 'All' : age}`} onSelect={(e) => setAge(e)}>
                        <Dropdown.Item eventKey="All">All</Dropdown.Item>
                        <Dropdown.Item eventKey="Kitten/Puppy">Kitten/Puppy</Dropdown.Item>
                        <Dropdown.Item eventKey="Adult">Adult</Dropdown.Item>
                        <Dropdown.Item eventKey="Senior">Senior</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton title={`Gender: ${gender}`} onSelect={(e) => setGender(e)}>
                        <Dropdown.Item eventKey="All">All</Dropdown.Item>
                        <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
                        <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
                    </DropdownButton>
                </Form>

                <Row xs={1} md={3} className="g-4">
                    {filteredAnimals.map((animal, idx) => (
                        <Col key={idx}>
                            <Card className="animal-card">
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
        </div>
    );
};

export default AdoptionGallery;
