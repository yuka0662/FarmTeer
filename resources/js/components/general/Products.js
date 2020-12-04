import React from 'react';
import css from '../../../css/components/App.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <nav>
            <link rel="stylesheet" href={css} />
            <div className="products-page">
                <div className="form">
                    <h2 className="general">商品詳細</h2>
                    <form>
                        {/*データベースからとってきた商品名が入る*/}
                        <p className="title">国産トマト</p>
                        {/*データベースからとってきたイメージ画像が入る*/}
                        <img src="../../../images/tomato.jpg" />
                        <div className="price">
                            {/*データベースからとってきた数量、値段が入る*/}
                            4~5パック/30個~40個程　　￥2,500
                        </div>
                        {/*データベースからとってきた商品詳細(農薬について書いてもらう)が入る*/}
                        <div className="product-layout">
                            <div className="product">
                                こだわりの国産トマト｡<br />
                                自然栽培､無農薬で栽培されたトマトは､甘さを多く含んでいてフルーティです｡<br />
                                料理などのほかにもゼリーなどのおやつ作りにも最適です。
                            </div>
                            {/*データベースからとってきた消費期限・賞味期限が入る*/}
                            賞味期限・消費期限:<input type="text" value="常温で2週間" readOnly /><br />
                            {/*データベースからとってきた送料(どちらが負担するのか)が入る*/}
                            配送料負担:<input type="text" value="送料無料（出品者負担）" readOnly /><br />
                            {/*データベースからとってきた配送元地域が入る*/}
                            配送元地域:<input type="text" value="鹿児島県" readOnly /><br />
                            {/*データベースからとってきた発送までの日数が入る*/}
                            発送までの日数:<input type="text" value="3～4日" readOnly /><br />
                            {/*データベースからとってきた発送方法が入る*/}
                            配送方法:<input type="text" value="ゆうパック" readOnly /><br />
                            {/*データベースからとってきた出品者名が入る*/}
                            出品者:<input type="text" value="" readOnly /><br />
                            {/*データベースからとってきた評価が入る*/}
                            評価:<input type="text" value="" readOnly /><br />
                        </div>
                        <br />
                        <Link to="/buy"><button className="general-button">購入手続き</button></Link>
                        <Link to="/notice"><button className="general-button">商品を通報</button></Link>
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