import React from 'react';
import Greeting from '../Greeting/Greeting';
import Introduction from '../Introduction/Introduction';
import Icons from '../Icons/Icons';
import './Home.css';

function Home() {
    return (
        <div className ='home'>
            <Greeting />
            <Introduction />
            <Icons />
        </div>
    )
}

export default Home;
