import React from 'react';
import { Link } from 'react-router-dom';

function fLogin() {
    return (
        <nav>
            <div className="login-page">
                <div className="form">
                    <h2 className="general">会員の方</h2>
                    <form className="farmlogin">
                        <p>
                            メールアドレス：<input type="text" placeholder="xxxx@xx.xxx" />
                        </p>
                        <p>
                            パスワード：<input type="password"/>
                        </p>
                        <input type="submit" className="farm-button" value="ログイン"/>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default fLogin;