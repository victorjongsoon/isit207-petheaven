import React from 'react';
import Header from './header';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "./release.css";

const Release = () => {
    return (
        <div>
            <Header title="Release" subtitle="Ensure Your Pet's Future Happiness" />
            {/* Page content goes here */}
            <div className="release-container">
                <Form>
                    <h1>Pet Release Request Form</h1>

                    <Form.Group className="mb-3" controlId="petName">
                        <Form.Label>Pet Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter pet's name" />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Pet Image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Unit</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                {/* Add state options here */}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridReason">
                        <Form.Label>Reason for Releasing</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="By submitting you declare that all information entered are accurate." />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Release;
