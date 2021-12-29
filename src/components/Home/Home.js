import React, { useState, useEffect } from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    const [search, setSearch] = useState('');

    const [products, setProducts] = useState({})


console.log(products)


    useEffect(()=>{
        const uri = `https://searchv7.expertrec.com/v6/search/eb17a931b1ab4950928cabbf42527715/?user=&q=${search}&size=6&suggestions=1&maxSuggestions=6`;
        fetch(uri)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[search])





    const handleSearchBar = event =>{
        // const search = event.target.value;
        setSearch(event.target.value)
        




































        // step-1
        // const searchBar = products.filter(x=>x.sub_category.some(y=>y?.royaloak_subcategory_name?.toLocaleLowerCase().includes(search.toLocaleLowerCase())));



        // if(searchBar.length!==0){
        //     setNewProducts(searchBar[0]?.sub_category)
        // }else{
        //     return;
        // }

        // step-2
        // const findedProducts = newProducts?.filter(z=>z?.royaloak_subcategory_name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
        

        // setFindProducts(findedProducts);

        // setSliceProducts(findProducts[0]?.sub_category?.slice(0, 6))
    

    }
    return (
        <>
            <Row className='d-flex align-items-center'>
                <Col md={2}>Site logo</Col>


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

                <Col md={5}> Menu Names</Col>
            </Row>



            {
                search.length !==0 &&
                <div className='searchResults shadow-lg'>
                    <Row>
                        <Col md={3} className='border-end ps-4 pt-3 pb-3'>
                            <h6>TOP SEARCHES</h6>
                            {/* <Button
                            className='hoverButton border-0 rounded-0'>
                            
                            {findProducts[0]?.royaloak_subcategory_name}</Button><br/> */}
                            {
                            products?.suggestions?.map(suggestion=><Button
                             className='hoverButton border-0 rounded-0'
                            key={suggestion?.score}
                            >{suggestion?.suggestion}</Button>
                            )
                                
                            } 
                                            
                            <h6 className='mt-3'>TOP COLLECTIONS</h6>                
                        </Col>

                        <Col md={9} className='border-end pe-4 pt-3 pb-3'>
                        <h6>POPULAR PRODUCTS IN ‘ {search.toLocaleUpperCase()} ’</h6> 
                            <Row>
                               
                            </Row>               
                        </Col>
                    </Row>
                </div>}



            <h2>This is input</h2>
        </>
    );
};

export default Home;



