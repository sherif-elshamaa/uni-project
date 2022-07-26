import React from 'react'
import '../styles/Followus.css'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

function Followus() {
    return (
        <div className="followus">
            <span className="social">
                <p>Follow us:</p>
                <a href="/">
                    <FaFacebookF />
                </a>
                <a href="/">
                    <FaTwitter />
                </a>
                <a href="/">
                    <FaLinkedinIn />
                </a>
                <a href="/">
                    <FaYoutube />
                </a>
                <a href="/">
                    <FiInstagram />
                </a>
            </span>
            <>
                <a href="/" className="language">عربي</a>
            </>
        </div>
    )
}

export default Followus