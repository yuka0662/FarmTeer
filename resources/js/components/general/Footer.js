import React from 'react';
import css from '../../../css/components/general.css'

function Footer() {
    return(
        <nav>
            <link rel="stylesheet" href={css} />
            <div className="footer">copyright@farmteer all rights reserved.</div>
        </nav>
    )
}

export default Footer;