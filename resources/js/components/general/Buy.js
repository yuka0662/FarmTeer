import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Buy(props) {
    const [good, setGood] = useState([]);
    
    useEffect(() => {
        getGood()
    },[])

    const getGood = async () => {
        // console.log(props.match)
        const response = await axios.get(`/api/good/${props.match.params.id}`);
        setGood(response.data.good)
    }

    return (
        <nav className="buy-page">
            <h1>購入手続き</h1>
            <div><img src="../../../images/tomato.jpg" alt="対象商品" /></div>
            {good.goodsname}
            <p>{good.price}円</p>
            <div>
                支払い方法
                <Link to="/payment">クレジット払い</Link>
            </div>
            <div>
                支払い金額
                ￥{good.price}
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