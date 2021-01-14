import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Confirmation(props) {
    const [good, setGood] = useState([]);

    useEffect(() => {
        getGood()
    }, [])

    const getGood = async () => {
        // console.log(props.match)
        const response = await axios.get(`/api/good/${props.match.params.id}`);
        setGood(response.data.good)
    }

    return (
        <nav className="buy-page">
            <div className="form">
                <h2 className="general">購入確認</h2>
                <div className="notice-product">
                    <img src={`../../images/${good.photo}`} alt="商品画像" />
                    {good.goodsname}
                </div>
                <p>数量：{good.quantity}　　値段：{good.price}円</p>
                <div>
                    支払い方法：
                    クレジット払い
                </div>
                <div>
                    支払い金額：
                    ￥{good.price + good.carriage}
                </div>
                <div>
                    名前
                    郵便番号
                    住所
                </div>
                {/**ボタンを押して購入が確定されるとDBに入る */}
                <input className="general-button" type="submit" value="購入を確定する" />
            </div>
        </nav>
    )
}

export default Confirmation;