import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {


    const handleSearchBar = event =>{
        console.log(event.target.value);

    }
    return (
        <>
            <Row>
                <Col md={3}>Site logo</Col>


                <Col md={5}>
                    <InputGroup className="mb-3 d-flex align-items-center">
                        <FormControl
                        onChange={handleSearchBar}
                        className='rounded-0'
                        placeholder="Find your furniture.."
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <Button type='submit' id="searchIcon"><i className="fas fa-search"></i></Button>
                    </InputGroup>
                </Col>


                <Col md={4}> Menu Names</Col>
            </Row>



            
            <h2>This is input</h2>

            
        </>
    );
};

export default Home;