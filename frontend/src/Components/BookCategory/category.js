import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./category.css";

export const Categories = () => {

    const [activeCat, setActiveCat] = useState("");
    const [activeCatTab, setActveCatTab] = useState("");

    return (
        <div className="category-container">
            <div className="category-div">
                <Link to="/" className="cat-link">
                    <div className={`${activeCatTab === "home" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("home")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('home')}>
                        <div className="category-book-div">
                            <img src="./images/home.jfif" alt="" />
                        </div>
                        <div className={`${activeCat === "home" && "active-category"} cat-name`}>
                            Home
                        </div>
                    </div>
                </Link>
                <Link to="/novels" className="cat-link">
                    <div className={`${activeCatTab === "novels" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("novels")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('novels')}>
                        <div className="category-book-div">
                            <img src="./images/novel.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "novels" && "active-category"} cat-name`}>
                            Novels
                        </div>
                    </div>
                </Link>
                <Link to="/science" className="cat-link">
                    <div className={`${activeCatTab === "science" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("science")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('science')}>
                        <div className="category-book-div">
                            <img src="./images/science.jfif" alt="" />
                        </div>
                        <div className={`${activeCat === "science" && "active-category"} cat-name`}>
                            Science
                        </div>
                    </div>
                </Link>
                <Link to="/story" className="cat-link">
                    <div className={`${activeCatTab === "story" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("story")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('story')}>
                        <div className="category-book-div">
                            <img src="./images/story.webp" alt="" />
                        </div>
                        <div className={`${activeCat === "story" && "active-category"} cat-name`}>
                            Story Books
                        </div>
                    </div>
                </Link>
                <Link to="/mythology" className="cat-link">
                    <div className={`${activeCatTab === "mythology" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("mythology")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('mythology')}>
                        <div className="category-book-div">
                            <img src="./images/mythology.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "mythology" && "active-category"} cat-name`}>
                            Mythology
                        </div>
                    </div>
                </Link>
                <Link to="/history" className="cat-link">
                    <div className={`${activeCatTab === "history" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("history")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('history')}>
                        <div className="category-book-div">
                            <img src="./images/history.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "history" && "active-category"} cat-name`}>
                            History
                        </div>
                    </div>
                </Link>
                <Link to="/horror" className="cat-link">
                    <div className={`${activeCatTab === "horror" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("horror")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('horror')}>
                        <div className="category-book-div">
                            <img src="./images/horror.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "horror" && "active-category"} cat-name`}>
                            Horror
                        </div>
                    </div>
                </Link>
                <Link to="/biographies" className="cat-link">
                    <div className={`${activeCatTab === "biographies" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("biographies")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('biographies')}>
                        <div className="category-book-div">
                            <img src="./images/biography.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "biographies" && "active-category"} cat-name`}>
                            Biographies
                        </div>
                    </div>
                </Link>

                <Link to="/gk" className="cat-link">
                    <div className={`${activeCatTab === "gk" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("gk")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('gk')}>
                        <div className="category-book-div">
                            <img src="./images/gk.jpg" alt="" />
                        </div>
                        <div className={`${activeCat === "gk" && "active-category"} cat-name`}>
                            GK
                        </div>
                    </div>
                </Link>
                <Link to="/poetry" className="cat-link">
                    <div className={`${activeCatTab === "poetry" && "active-cat-item"} cat-item`} onMouseOver={() => setActiveCat("poetry")} onMouseOut={() => setActiveCat("")} onClick={() => setActveCatTab('poetry')}>
                        <div className="category-book-div">
                            <img src="./images/poetry.jfif" alt="" />
                        </div>
                        <div className={`${activeCat === "poetry" && "active-category"} cat-name`}>
                            Poetry
                        </div>
                    </div>
                </Link>


            </div>
        </div>
    )
}