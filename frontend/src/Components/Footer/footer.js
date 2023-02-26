import React from "react";
import "./footer.css";

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-div">
                <div className="f-main">
                    <div className="f-div-head">ABOUT</div>
                    <div className="f-content">About Us</div>
                    <div className="f-content">Contact Us</div>
                </div>
                <div className="f-main">
                    <div className="f-div-head">HELP</div>
                    <div className="f-content">Shipping</div>
                    <div className="f-content">Cancellation & Returns</div>
                </div>
                <div className="f-main">
                    <div className="f-div-head">POLICY</div>
                    <div className="f-content">Terms Of Use</div>
                    <div className="f-content">Return Policy</div>
                </div>
                <div className="f-main">
                    <div className="f-div-head">SOCIAL</div>
                    <div className="f-content">Facebook</div>
                    <div className="f-content">Twitter</div>
                </div>
                
            </div>
        </div>
    )
}