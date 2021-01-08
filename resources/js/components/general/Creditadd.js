import React from 'react';

function Creditadd() {
    return (
        <nav className="buy-page">
            <div className="form">
                <h2 className="general">クレジットカードの追加</h2>
                <div>
                    期限
                </div>
                <div>
                    セキュリティコード
                </div>
                <input className="general-button" type="submit" value="追加する" />
            </div>
        </nav>
    )
}

export default Creditadd;