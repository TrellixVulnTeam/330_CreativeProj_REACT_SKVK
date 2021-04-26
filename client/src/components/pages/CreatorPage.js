import { Nav } from '../items';
import { React, useContext, useEffect } from 'react'
import GlobalContext from '../GlobalContext';
import CreatorContext from '../context/CreatorContext';
import { QuizBox } from '../items';


// import React from 'react';

function CreatorPage(props) {
    // const { page, setPage } = useContext(GlobalContext);
    

    return (
        <div>
            <nav id="nav_bar">
                <Nav on='on_false' action='create_game' name='Create a Game'></Nav>
                <Nav on='on_false' action='start_game' name='Start a Game'></Nav>
                <Nav on='on_false' action='saved_games' name='Saved Games'></Nav>
                <Nav on='on_false' action='user_info' name='User Info'></Nav>
                <Nav on='on_true' action='creator_home' name='Home'></Nav>
                {/* <li className = 'link_nav'><a href="create.jsx">Create</a></li>
                    <li className = 'link_nav'><a href="start.jsx">Start a Game</a></li>
                    <li className = 'link_nav'><a href="saved.jsx">Saved Games</a></li>
                    <li className = 'link_nav'><a href="user.jsx">User Info</a></li> */}`
            </nav>
            <div id="quizzes">
                    <QuizBox></QuizBox>
               
            </div>
        </div>
    );
}

export default CreatorPage;