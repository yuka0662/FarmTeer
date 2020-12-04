import React from 'react';
import { Link } from 'react-router-dom';

function Buy() {
    return (
        <nav className="buy-page">
            <h1>購入手続き</h1>
            <div><img src="../../../images/tomato.jpg" alt="対象商品" /></div>
            国産トマト
            <p>￥2,500</p>
            <div>
                支払い方法
                <Link to="/payment">クレジット払い</Link>
            </div>
            <div>
                支払い金額
                ￥1,500
            </div>
            <Link to="/address">
                <div>
                    名前
                    郵便番号
                    住所
                </div>
            </Link>
            <Link to="/confirmation">
                <button className="general">注文を確認する</button>
            </Link>
        </nav>
    )
}

export default Buy;