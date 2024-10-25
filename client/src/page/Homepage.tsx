import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './Homepage.css';

const Homepage = () => {
    const [sidebarClosed, setSidebarClosed] = useState(false);

    const handleSidebarToggle = (closed: boolean | ((prevState: boolean) => boolean)) => {
        setSidebarClosed(closed);
    };

    return (
        <div>
            <Sidebar onToggle={handleSidebarToggle} />
            <section className={`home ${sidebarClosed ? 'sidebar-closed' : ''}`}>
                <div className="text">Home Page</div>
            </section>
        </div>
    );
};

export default Homepage;
