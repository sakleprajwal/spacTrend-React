import React from 'react';
import Categories from '../../components/Categories/Categories';
import Navbar from '../../components/Navigation/Navbar';

const Home = () => {
    

    return (
        <div>
            <Navbar/>
            <Categories/>

            <div className="carousel-section flex-row"> 
                <img src="asset/carousel1-spacKart.webp" alt="Carousel image"/>
            </div>

            <div className="deals-section flex-column">
                <h3 className="deals-title">Deals of the Day</h3>
                <div className="deal-items-container flex-row">
                    <div className="deal-item">
                        <img src="asset/deal1-spacKart.webp" alt="Best Deal"/>
                    </div>
                    <div className="deal-item">
                        <img src="asset/deal2-spacKart.webp" alt="Best Deal"/>
                    </div>
                    <div className="deal-item">
                        <img src="asset/deal3-spacKart.webp" alt="Best Deal"/>
                    </div>
                    <div className="deal-item">
                        <img src="asset/deal4-spacKart.webp" alt="Best Deal"/>
                    </div>
                    <div className="deal-item">
                        <img src="asset/deal5-spacKart.webp" alt="Best Deal"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;