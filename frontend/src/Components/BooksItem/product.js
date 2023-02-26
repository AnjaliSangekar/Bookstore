import React from "react";
import "./books.css";
import { add, increase } from "../BookStoreItem/cartProduct";
import { useDispatch } from "react-redux";
// import { BooksData } from "../Data/booksdata";
import { data } from "../Data/booksdata";


export const Product = (props) => {

    const BooksData = props.data;
    const data = props.data;

    const dispatch = useDispatch();

    const handleAdd = (data) => {
        dispatch(add(data));
        dispatch(increase(data.price));
        
        
    }

    return (
        <div className="b-item-main" key={data.id}>
            <div className="b-item-book">
                <div>
                    <img src={"./images/" data.path } alt="" />
                </div>
            </div>
            <div className="b-item-info">
                <div>
                    <p className="b-title">{data.title}</p>
                    <p className="b-author">{data.author}</p>
                    <p className="b-price">&#8377;<span>{data.price}</span></p>
                </div>
                <div className="b-add-cart">
                    <button type="button" className="add-to-cart-btn" onClick={() => handleAdd(data)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}