import React, { useState, useEffect } from 'react';
import { Button, Card, Col, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    // All States
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [products, setProducts] = useState({});
    const [categoryProducts, setCategoryProducts] = useState({});
    const [multiProduct, setMultiProduct] = useState({});

    

    useEffect(()=>{
        setMultiProduct(products)
        setMultiProduct(categoryProducts)
    },[search, category])



    // Fetching Data

    useEffect(()=>{
        const uri = `https://searchv7.expertrec.com/v6/search/eb17a931b1ab4950928cabbf42527715/?user=&q=${search}&size=6&suggestions=1&maxSuggestions=6`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[search])

    useEffect(()=>{
        const uri = `https://searchv7.expertrec.com/v6/search/eb17a931b1ab4950928cabbf42527715/?user=&q=${category}&size=6&suggestions=1&maxSuggestions=6`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setCategoryProducts(data))
    },[category])

    useEffect(()=>{
        const uri = `https://searchv7.expertrec.com/v6/search/eb17a931b1ab4950928cabbf42527715/?user=&q=${category}&size=6&suggestions=1&maxSuggestions=6`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setCategoryProducts(data))
    },[category])




    // Search Bar Event Handlers
    const handleSearchBar = event =>{
        setSearch(event.target.value)
        
    }
    
    // Category Ways Event Handlers
    const handleCategoryChange = event =>{
        let wait= event.replaceAll(' ', "%20");
        setCategory(wait);
    }





    return (
        <>


        {/* Searching Section */}

            <Row>
                <Col md={2}>
                <img src="https://www.royaloakindia.com/images/royaloakindia-logo.webp" alt=""/>
                </Col>


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

                <Col md={5}> Hare is Menu Names</Col>
            </Row>


            
            {/* Search Result Showing Section */}

            {
                search.length !==0 &&
                <div className='searchResults shadow-lg'>
                    <Row>


                    {/* Suggestion Section */}
                        <Col md={3} className='border-end ps-4 pt-3 pb-3'>


                        {/* Top Searches Section */}

                            <h6>TOP SEARCHES</h6>

                            {
                            products?.suggestions?.map(suggestion=><Button
                            onMouseOver={()=>handleCategoryChange(suggestion?.suggestion)}
                            className='hoverButton border-0 rounded-0'
                            key={suggestion?.suggestion}
                            >{suggestion?.suggestion}</Button>
                            )
                                
                            } 


                            {/* Top Collection Section */}

                            <h6 className='mt-3'>TOP COLLECTIONS</h6> 
                            {
                               products?.facets?.collectionname?.map(country=><Button
                            onMouseOver={()=>handleCategoryChange(country?.name)}
                            className='hoverButton border-0 rounded-0'
                            key={country?.name}
                            >{country?.name}</Button>) 
                            }               
                        </Col>

                        
                        {/* Showing Product Section */}

                        <Col md={9} className='border-end pe-4 pt-3 pb-3'>
                        <h6>POPULAR PRODUCTS IN ‘ {search.toLocaleUpperCase()} ’</h6> 
                            <Row className='g-1'>
                                { 
                                    multiProduct?.results?.map(result=> <Col
                                    key={result?.productuniqueid}
                                    md={4}
                                    >
                                        

                                        {/* Product Card Section */}

                                        <a className='cardDecoration'  href={result?.producturl} target="_blank">
                                        {multiProduct?.results?.length === 0 ? <Spinner animation="grow" variant="warning" /> : <Card className='productCard'>
                                            <Card.Img variant="top" src={result?.productimage} />
                                            <Card.Body className='p-1'>
                                            <Card.Text className='mb-1 productName'>{result?.productname?.slice(0,21)}...</Card.Text>
                                            <Card.Text>
                                                 <span className="fw-bold" style={{color:"#519aed"}}>Rs {result?.sellingprice}</span> &nbsp; &nbsp;<span className="text-decoration-line-through" style={{fontSize:'13px', color:'grey'}}>Rs {result?.mrpprice}</span>
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>}
                                        </a>
                                    </Col>)
                                }
                                <Button href={`https://www.royaloakindia.com/search-new?q=${search}`} 
                                target="_blank" className='searchResultBtn'>View All Search Results</Button>
                            </Row>               
                        </Col>
                    </Row>
                </div>}
        </>
    );
};

export default Home;



