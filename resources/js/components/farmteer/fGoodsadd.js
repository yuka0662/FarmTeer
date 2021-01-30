import React, { useEffect, useState } from 'react';
import axios from "axios";

function Goodsadd() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = async () => {
        const response = await axios.get('/api/categorise');
        setCategories(response.data.categorise)
    }

    
    //登録ボタンが押されたとき
    const addGoods = () => {
        const data = {
            farmname: $('.farmname').val(),
            goodsname: $('.goodsname').val(),
            quantity: $('.quantity').val(),
            expired: $('.expired').val(),
            price: $('.price').val(),
            carriage: $('.carriage').val(),
            burden: $('.burden').val(),
            howcarri: $('.howcarri').val(),
            carridays: $('.carridays').val(),
            carriarea: $('.carriarea').val(),
            pesticides: $('.pesticides').val(),
            detail: $('.detail').val(),
            category_id: $('.category_id').val(),
            photo: $('.photo').val(),
            profit: $('.profit').val(),
            members_id: $('.members_id').val(),
        }
        axios.post("/api/goodsadd", data)
            .then(() => {
                console.log("商品データを追加");
                Clear();
            })
    };

    function Clear() {
        for (var i = 1; i <= 15; i++) {
            document.getElementById("form" + i).value = '';
        }
    }

    return (
        <div className="farm-page">
            <div className="form">
                <h1 className='general'>商品登録</h1>
                <h2>入力が終わったら下に行って登録ボタンを押してね！</h2>
                <p>農家名：<input type="text" id="form1" className="farmname" /></p>
                <p>商品名：<input type="text" id="form2" className="goodsname" /></p>
                <p>数量：<input type="text" id="form3" className="quantity" /></p>
                <p>賞味期限：<input type="text" id="form4" className="expired" /></p>
                <p>値段：<input type="text" id="form5" className="price" /></p>
                <p>送料：<input type="text" id="form6" className="carriage" /></p>
                <p>送料負担者：<input type="text" id="form7" className="burden" /></p>
                <p>発送方法：<input type="text" id="form8" className="howcarri" /></p>
                <p>発送可能日：<input type="text" id="form9" className="carridays" /></p>
                <p>発送元：<input type="text" id="form10" className="carriarea" /></p>
                <p>農薬名：<input type="text" id="form11" className="pesticides" /></p>
                <p>商品詳細：<input type="text" id="form12" className="detail" /></p>
                <p>カテゴリー
                        <select className="category_id">
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.categoryname}</option>
                        ))}
                    </select>
                </p>
                <p>写真：<input type="text" id="form13" className="photo" /></p>
                <p>農家利益：<input type="text" id="form14" className="profit" /></p>
                <p>農家No：<input type="text" id="form15" className="members_id" /></p>
                <button className="general-button" onClick={() => addGoods()}>登録</button>
                <button className="general-button" onClick={() => Clear()}>リセット</button>
            </div>
        </div>
    )
}

export default Goodsadd;