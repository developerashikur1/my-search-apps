import React, { useState, useEffect } from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import NastedSearch from '../NastedSearch/NastedSearch';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState({});
    
    // console.log(products);


    // fetch data from the API
    useEffect(() => {
        const uri = 'https://www.royaloakindia.com/api/header-data-v2';
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setProducts(data.response.categoryAll) )
    }, [])
    // const pros = products.(x=>console.log(x?.sub_category)

    const handleSearchBar = event =>{
        const search = event.target.value;
        console.log(typeof(search))

        const searchBar = products.filter(x=>x.sub_category.some(y=>y?.search_keywords?.toLocaleLowerCase().includes(search.toLocaleLowerCase())));

    
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

            <NastedSearch ></NastedSearch>
        </>
    );
};

export default Home;