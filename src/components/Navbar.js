import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    const navbarBackgroundColor = props.mode === 'pookie' ? '#fbc6f3' : '';

    return (
        <nav
            className={`navbar navbar-expand-lg ${props.mode === 'pookie' ? 'navbar-pookie' : `bg-${props.mode}`} navbar-${props.mode}`}
            style={{ backgroundColor: navbarBackgroundColor }} >
            <div className="container-fluid">
                <Link className="navbar-brand mx-5  text-decoration-underline" to="/"><strong>{props.title}</strong></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input
                            className="form-check-input"
                            onClick={() => props.toggleMode()}
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            disabled={props.mode === 'pookie'}
                            style={{ cursor: "pointer" }}  // Added cursor style here
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                            style={{ 
                                color: props.mode === 'pookie' ? '#6c757d' : 'inherit',
                                cursor: "pointer"  // Added cursor style here
                            }}
                        >
                            {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
                        </label>
                    </div>

                    {/* Pookie Mode Toggle */}
                    <div className={`form-check form-switch mx-3 text-${props.mode === 'pookie' ? 'dark' : 'dark'}`}>
                        <input
                            className="form-check-input"
                            onClick={() => props.togglePookieMode()}
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckPookie"
                            disabled={props.mode === 'dark'}
                            style={{ cursor: "pointer" }}  // Added cursor style here
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckPookie"
                            style={{ 
                                color: props.mode === 'dark' ? '#6c757d' : 'inherit',
                                cursor: "pointer"  // Added cursor style here
                            }}
                        >
                            {props.mode === 'pookie' ? 'Disable Pookie Mode' : 'Enable Pookie Mode'}
                        </label>
                    </div>

                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired,
    togglePookieMode: PropTypes.func.isRequired
};

Navbar.defaultProps = {
    title: 'Set title',
};
