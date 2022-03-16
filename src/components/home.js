import React from 'react';
import ReactDOM from 'react-dom';
import Header from './elements/header';
import Banner from './banner';
import ExpertTalk  from './experttalk';

function Home(){
    return(
        <div className="home">
            <Header />
            <Banner />
            <ExpertTalk />
        </div>
    );
}

export default Home;