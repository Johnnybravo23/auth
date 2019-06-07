import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';
import logo from '../img/icon.png';

export class Navbar extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.clearCurrentProfile();
        this.props.logoutUser();
      }

    render() {
        const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
      <li className="nav-item">
        <a href="/login" onClick={this.onLogoutClick.bind(this)} className="nav-link">
          <img 
            className="rounded-circle" 
            src={user.avatar} 
            alt={user.name} 
            style={{ width: '25px', marginRight: '5px'}} 
            title="You must have a Gravatar connected to your email to display an image"
          />
          Logout
        </a>
      </li>
    </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
                <Link to="/login" className="nav-link">
                    administator
                </Link>
            </li>
    </ul>
    );
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="monkey" className="logo1" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    { isAuthenticated ? authLinks : guestLinks }
                </div>
            </nav>
        );
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(Navbar);
