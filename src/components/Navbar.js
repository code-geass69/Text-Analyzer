import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    // Define the background color for different modes
    const navbarBackgroundColor = props.mode === 'pookie' ? '#ff03c8' : '';

    return (
        <nav
            className={`navbar navbar-expand-lg ${props.mode === 'pookie' ? 'navbar-pookie' : `bg-${props.mode}`} navbar-${props.mode}`}
            style={{ backgroundColor: navbarBackgroundColor }}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">{props.aboutText}</a>
                        </li>
                    </ul>

                    {/* Dark/Light Mode Toggle */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input
                            className="form-check-input"
                            onClick={() => props.toggleMode()}
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            disabled={props.mode === 'pookie'}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                            style={{ color: props.mode === 'pookie' ? '#6c757d' : 'inherit' }}
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
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckPookie"
                            style={{ color: props.mode === 'dark' ? '#6c757d' : 'inherit' }}
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
    aboutText: 'About Us'
};
