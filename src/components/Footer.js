import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 Gym Management System | Powered by Ranjan Yadav</p>
            <div className="social-icons">
                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode className="social-icon" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="social-icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="social-icon" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="social-icon" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
