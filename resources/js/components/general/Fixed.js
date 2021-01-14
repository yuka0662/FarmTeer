import React, { useEffect, useState } from 'react';
import axios from 'axios';

{/**farmlistから取ってきている情報をlogからの情報に変える */ }
function Fixed(props) {
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
            <h2 className="general">取引画面</h2>
            <div className="notice-product">
                <img src={`../../images/${good.photo}`} alt="商品画像" />
                {good.goodsname}
            </div>
        </nav>
    )
}

export default Fixed;