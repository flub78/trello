import React from 'react';
import axios from 'axios';


import Navbar from '../components/Navbar';
import BoardLeftPanel from '../components/BoardLeftPanel';
import BoardWorkspace from '../components/BoardWorkspace';
import { apiServer } from '../lib/Util';


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

    const boardId = window.location.href.split('/').pop().replace('#', '').toLowerCase();

    const [boardsData, setBoardsData] = React.useState([]);

    /**
     * Fetch boards from the API
     */
    React.useEffect(() => {
        const url = apiServer + '/boards';
        console.log('axios: fetching boards from ' + url);
        axios.get(url)
            .then((res) => setBoardsData(res.data));
    }, []);

    return (
        <div>
            <Navbar theme="dark" boardsData={boardsData} />

            <section id="main-tasklist" className="container-fluid row flex-nowrap g-0" style={{ height: 'calc(100vh - 64px)' }}>
                <BoardLeftPanel theme="dark" boardsData={boardsData} />
                <BoardWorkspace brdid={boardId} brd={{ name: board_name }} boardsData={boardsData} />
            </section>
        </div>
    );
};

export default BoardPage;