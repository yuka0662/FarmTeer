import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import css from '../../../css/components/App.css';
import Button from '@material-ui/core/Button';

function Products(props) {
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
        <nav>
            <link rel="stylesheet" href={css} />
            <div className="products-page">
                <div className="form">
                    <h2 className="general">商品詳細</h2>
                    <form>
                        <p className="title">{good.goodsname}</p>
                        <img src={`../../images/${good.photo}`} alt="商品画像" />
                        <div className="price">
                            数量：{good.quantity}　　値段：{good.price}円
                        </div>
                        {/*データベースからとってきた商品詳細(農薬について書いてもらう)が入る*/}
                        <div className="product-layout">
                            <div className="product">
                                {good.detail}
                            </div>
                            農薬：<input type="text" value={
                                good.pesticides == null ?(
                                    '無農薬'
                                ):(
                                    good.pesticides
                                )} readOnly /><br />
                            賞味期限・消費期限:<input type="text" value={good.expired} readOnly /><br />
                            配送料負担:<input type="text" value={good.carriage+'円（'+good.burden+'負担）'} readOnly /><br />
                            配送元地域:<input type="text" value={good.carriarea} readOnly /><br />
                            発送までの日数:<input type="text" value={good.carridays} readOnly /><br />
                            配送方法:<input type="text" value={good.howcarri} readOnly /><br />
                            出品者:<input type="text" value={good.farmname} readOnly /><br />
                            {/*データベースからとってきた評価が入る*/}
                            評価:<input type="text" value="" readOnly /><br />
                        </div>
                        <br />
                        <Link to={`/buy/${good.id}`}><button className="general-button">購入手続き</button></Link>
                        <Link to={`/products/notice/${good.id}`}><button className="general-button">商品を通報</button></Link>
                        <div className="evaluation">
                            <input type="text" className="comment" />
                            <Button primary="true" className="general-button">コメントする</Button>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Products;