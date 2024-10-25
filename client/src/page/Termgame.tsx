import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './Termgame.css';

const Termgame = () => {
    const [sidebarClosed, setSidebarClosed] = useState(false);

    const handleSidebarToggle = (closed: boolean | ((prevState: boolean) => boolean)) => {
        setSidebarClosed(closed);
    };

    return (
        <div>
            {/* Pass onToggle prop to Sidebar */}
            <Sidebar onToggle={handleSidebarToggle} />
            <section className={`term ${sidebarClosed ? 'sidebar-closed' : ''}`}>
                <div className="text">Term Game</div>
            </section>
        </div>
    );
};

export default Termgame;
