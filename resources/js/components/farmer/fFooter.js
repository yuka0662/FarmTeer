import React from 'react';
import css from '../../../css/components/App.css'

function fFooter() {
    return(
        <nav className="farmer-footer">
            <link rel="stylesheet" href={css} />
            <div className="footer-text">copyright@farmteer all rights reserved.</div>
        </nav>
    )
}

export default fFooter;