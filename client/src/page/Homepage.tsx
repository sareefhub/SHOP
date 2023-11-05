import React from 'react';
import Sidebar from '../components/Sidebar';
import './Homepage.css'

const Homepage = () => {
    return (
        <div>
            <Sidebar/>
            <section className="home">
              <div className="text">Home Page</div>
            </section>
        </div>
    );
};

export default Homepage;