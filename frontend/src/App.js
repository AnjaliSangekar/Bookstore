import React, { Component, useEffect } from 'react';
import './App.css';


import { Header } from './Components/Header/header'; 
import { Footer } from './Components/Footer/footer'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './Components/Addcart/addcart'; 
import { Orders } from './Components/Orders/order';
import { Provider } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import store from './Components/BookStoreItem/storeProduct';
import { Books } from './Components/BooksItem/books';
import { Categories } from './Components/BookCategory/category';
import { Login } from './Components/Login/login';
import { Banner } from './Components/Banner/banner';



function App(){
 
  const { isAuthenticated } = useAuth0();
  
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            {
              isAuthenticated ?
              <Route path="/"
                element={
                  <div>
                    <Categories></Categories>
                    <Banner></Banner>
                    <Books genre="home"></Books>
                  </div>
                }>
              </Route>
              :
              <Route path="/" element={<Login></Login>}>
              </Route>
            }
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/cart" element={
              <div>
                <Categories></Categories>
                <Cart></Cart>
              </div>
            }>
            </Route>
            <Route path='/myorders' element={<Orders></Orders>}></Route>
            <Route path="/novels" element={
              <div>
                <Categories></Categories>
                <Books genre="novels"></Books>
              </div>}>
            </Route>
            <Route path="/science" element={
              <div>
                <Categories></Categories>
                <Books genre="science"></Books>
              </div>}>
            </Route>
            <Route path="/story" element={
              <div>
                <Categories></Categories>
                <Books genre="story"></Books>
              </div>}>
            </Route>
            <Route path="/mythology" element={
              <div>
                <Categories></Categories>
                <Books genre="mythology"></Books>
              </div>}>
            </Route>
            <Route path="/history" element={
              <div>
                <Categories></Categories>
                <Books genre="history"></Books>
              </div>}>
            </Route>
            <Route path="/horror" element={
              <div>
                <Categories></Categories>
                <Books genre="horror"></Books>
              </div>}>
            </Route>
            <Route path="/biographies" element={
              <div>
                <Categories></Categories>
                <Books genre="biographies"></Books>
              </div>}>
            </Route>
            <Route path="/gk" element={
              <div>
                <Categories></Categories>
                <Books genre="gk"></Books>
              </div>}>
            </Route>
            <Route path="/poetry" element={
              <div>
                <Categories></Categories>
                <Books genre="poetry"></Books>
              </div>}>
            </Route>          
          </Routes>
          {/* <Banner></Banner> */}
          <Footer></Footer> 
        </BrowserRouter>
      </Provider>
    </div>
  );
};


export default App;