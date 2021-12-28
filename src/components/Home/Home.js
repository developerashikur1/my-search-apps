import React, { useState, useEffect } from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import NastedSearch from '../NastedSearch/NastedSearch';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    
    // console.log(products);
    const [newProducts, setNewProducts] = useState([]);
    // console.log(newProducts)

    // fetch data from the API
    useEffect(() => {
        const uri = 'https://www.royaloakindia.com/api/header-data-v2';
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setProducts(data.response.categoryAll) )
    }, [])
    

    const handleSearchBar = event =>{
        const search = event.target.value;
        // console.log(typeof(search))

        
        // step-1
        const searchBar = products.filter(x=>x.sub_category.some(y=>y?.royaloak_subcategory_name?.toLocaleLowerCase().includes(search.toLocaleLowerCase())));


        setNewProducts(searchBar[0]?.sub_category)

        // step-2
        const findedProducts = newProducts.filter(z=>z?.royaloak_subcategory_name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        console.log(findedProducts)

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