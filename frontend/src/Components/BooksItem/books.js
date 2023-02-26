import React, { useEffect, useState } from "react";
import "./books.css";
import { Product } from "./product";

import axios from "axios";

export const Books = (props) => {

const [products, setProducts] = useState([]);
const [isError, setIsError] = useState("");



const fetChProducts = async () => {
    // try{
        // const url = "http://localhost:3000/books?genere=" + props.genre;
        const res = await axios.get( "http://localhost:3000/books?genere=" + props.genre );
        setProducts(res.data);
    // } catch(error) {
    //     setIsError(error.message);      
    // }   
};
fetChProducts();
// useEffect(() => {
//     fetChProducts();
// });


    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {/* {isError !== "" && <h6>{isError}</h6>} */}
            <div className="books-container">
                {    
                    products.map((ele, index) => {
                        return (
                            <Product key={index} data={ele}></Product>
                        );
                    })
                }
            </div>
        </div>
    );
}