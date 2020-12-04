import React from 'react';
import { Link } from 'react-router-dom';

function Address() {
    return (
        <nav className="address-page">
            <h1>住所一覧</h1>
            ご自宅/勤務先など
            <div>名前(フリガナ)郵便番号住所</div>
            
            <div>名前フリガナ郵便番号住所</div>
            <Link to="/addressadd">
                <div>
                    <button onClick="addressadd">新しい住所を追加する</button>
                </div>
            </Link>
        </nav>
    )
}

export default Address;