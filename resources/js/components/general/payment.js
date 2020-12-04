import React from 'react';
import { Link } from 'react-router-dom';

function payment() {
    return (
        <nav className="payment-page">
            <h1>支払い方法</h1>
            <div>
                <div><input type="radio" />代引き(手数料￥300)</div>
                <div><input type="radio" />コンビニ(手数料￥100)</div>
                <div><input type="radio" />銀行振込(手数料￥100)</div>
            </div>
            <div><input type="radio" />クレジット(手数料￥0)</div>
            <Link to="/creditadd">クレジットカードの追加</Link>
        </nav>
    )
}

export default payment;