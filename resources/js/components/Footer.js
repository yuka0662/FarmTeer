import React from 'react';
import css from '../../css/components/App.css'
import { Link } from 'react-router-dom';
import Icon from '../../images/FTlogo.png'

function Footer() {
    return (
        <nav className="footer">
            <link rel="stylesheet" href={css} />
            <div className="footer-text">
                <div className="footer-item">
                    <h5><b>Farmteerとは</b><br /><br />
                        <Link to="/first">
                            <p className="footer-link">初めての方へ</p><br />
                        </Link>
                        <Link to="/guide">
                            <p className="footer-link">ガイド</p>
                        </Link>
                    </h5>
                </div>
                <img src={Icon} alt="ロゴ" />
                <p>copyright@farmteer all rights reserved.</p>
            </div>
        </nav>
    )
}

export default Footer;