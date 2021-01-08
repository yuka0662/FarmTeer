import React from 'react';
import { Link } from 'react-router-dom';

function Address() {
    return (
        <nav className="buy-page">
            <div className="form">
                <h2 className="general">住所一覧</h2>
                ご自宅/勤務先など
            <div>名前(フリガナ)郵便番号住所</div>

                <div>名前フリガナ郵便番号住所</div>
                <div>
                    <button className="general-button" onClick="addressadd">新しい住所を追加する</button>
                </div>
            </div>
        </nav>
    )
}

export default Address;