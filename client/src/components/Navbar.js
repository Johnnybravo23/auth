import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/icon.png';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="monkey" className="logo1" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">
                                administator
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar
