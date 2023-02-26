import React from "react";
// import { AiOutlineClose } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import "./login.css";
import { Link } from "react-router-dom";


export const Login = (props) => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-left">
                    <div>
                        <h3>BookStore</h3>
                    </div>
                    <div className="login-left-text">
                        A Room without books is like a body without a soul.
                        So many books, so little time.
                        Happy reading...
                    </div>
                    
                    <div>
                        <img src="./images/login.png" alt="" />
                    </div>
                </div>
                <div className="login-right">
                    <div>
                        <div>
                            <h2 className="login-text">
                                Please login to continue
                            </h2>
                            <p>
                                Get access to your orders, wishlist and
                                recommendations
                            </p>
                        </div>
                        <div>
                            By continuing, you agree to Bookstore's <span className="terms-n-privacy">Terms and privacy</span> 
                        </div>
                        <div className="login-btn-div">
                            <button type="button" className="login-signup-btn" onClick={() => loginWithRedirect()}>Login or signup</button>
                        </div> 
                        
                    </div>
                    <div className="right-bottom-div">
                        <p style={{ cursor: 'pointer' }} onClick={() => loginWithRedirect()}>New? Create an account </p>
                    </div>
                </div>
            </div>
        </div>
    )
}