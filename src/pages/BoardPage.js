import React from 'react';
import { useParams } from 'react-router-dom'

import Navbar from '../components/Navbar';
import BoardLeftPanel from '../components/BoardLeftPanel';
import BoardWorkspace from '../components/BoardWorkspace';

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const BoardPage = () => {


    /**
     * The board name is the at the end of the url
     * 
     * Example: http://localhost:3000/board/MyBoard
     * 
     * a board has 
     *   - a title
     *   - a description
     *   - a background image
     *   - background color
     *   - a list of task lists
     * 
     */
    const board_name = capitalize(window.location.href.split('/').pop().replace('#', ''));

    console.log('board_page', board_name);

    return (
        <div>
            <Navbar theme="dark" />

            <section id="main-tasklist" className="container-fluid row flex-nowrap g-0" style={{ height: 'calc(100vh - 64px)' }}>
                <BoardLeftPanel />
                <BoardWorkspace brd={{ name: board_name }} />
            </section>
        </div>
    );
};

export default BoardPage;