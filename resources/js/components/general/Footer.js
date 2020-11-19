import React from 'react';
import css from '../../../css/components/App.css'

function Footer() {
    return(
        <nav className="footer">
            <link rel="stylesheet" href={css} />
            <div className="footer-text">copyright@farmteer all rights reserved.</div>
        </nav>
    )
}

export default Footer;