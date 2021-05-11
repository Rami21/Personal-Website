import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import './Icons.css';

function Icons() {
    return (
        <div>
            <a href="https://www.linkedin.com/in/ramiabdulrahim/" 
            target="_blank" rel="noreferrer">
                <FaLinkedin className="icons"/>
            </a>
            <a href="https://github.com/Rami21"
            target="_blank" rel="noreferrer">
                <FaGithub className="icons"/>
            </a>
            <a href="mailto:r3abdulr@uwaterloo.ca"
            target="_blank" rel="noreferrer">
                <FaEnvelope className="icons"/>
            </a>
        </div>
    )
}

export default Icons;
