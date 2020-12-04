import React from 'react';
import { Link } from 'react-router-dom';

function Confirmation() {
    return (
        <nav className="confirmation-page">
            <h1>購入確認</h1>
            <div>
                <img src="../../../images/tomato.jpg" alt="対象商品" />国産トマト
            </div>
            <p>￥2,500</p>
            <div>
                支払い方法
                クレジット払い
            </div>
            <div>
                支払い金額
                ￥2,500
            </div>
            <div>
                名前
                郵便番号
                住所
            </div>
            {/**ボタンを押して購入が確定されるとDBに入る */}
            <input type="submit" value="購入を確定する" />
        </nav>
    )
}

export default Confirmation;