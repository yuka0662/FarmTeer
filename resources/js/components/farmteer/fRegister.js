import React from 'react';
import { Link } from 'react-router-dom';

function fRegister() {
    return (
        <nav>
            <div className="register-page">
                <div className="form">
                    <h1 className="general">出品者申請</h1>
                    <form className="farmlogin">
                        <p>
                            メールアドレス：<input type="text" placeholder="xxxx@xx.xxx"/>
                        </p>
                        <p>
                            農園名/個人名：<input type="text"></input>
                        </p>
                        <input className="farm-button" type="submit" value="申請"></input>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default fRegister;