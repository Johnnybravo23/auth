import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class Landing extends Component {
    render() {
        return (
                <header className="hero">
                    <div className="banner">
                        <h1 className="banner-title">Simple Auth App..</h1>
                        <button className="banner-btn"><Link to="/login">Start..</Link></button>
                    </div>
                </header>  
        )
    }
}

export default Landing;
