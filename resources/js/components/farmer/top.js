import React from 'react';
import Header from './fHeader'
import Footer from './fFooter'

function Top() {
    const imageHander = (event) => {
        if (event.target.files === null) {
            return;
        }
        const file = event.target.files[0];
        if (file === null) {
            return;
        }
        let imgTag = document.getElementById("preview");
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result;
            imgTag.src = result;
        }
    };
    return (
        <nav>
            <Header />
            <div className="top-page">
                <div className="list-form">
                </div>
                <div className="edit-form">
                    <h2 className="farmer-text">商品登録</h2>
                    <p>商品名：<input type="text" /></p>
                    <p>価格：<input type="text" /></p>
                    <p>数量(内容量)：<input type="text" /></p>
                    <p>詳細：<input type="textarea" /></p>
                    <div className="cp_sl0 edit">
                    カテゴリー：
                        <select id="category" name="category">
                            <option value="選択してください" >カテゴリーを選択</option>
                            <option value="1">野菜</option>
                            <option value="2">果物</option>
                            <option value="3">ボランティア対象商品</option>
                            <option value="4">その他</option>
                        </select>
                    </div>
                    <p>写真：
                    <input type="file" accept="image/png, image/jpeg, image/gif" onChange={imageHander} />
                        <img id="preview" src=""></img>
                    </p>
                    <button className="farmer-edit-button">追加</button>
                    <button className="farmer-edit-button">変更</button>
                    <button className="farmer-edit-button">削除</button>
                </div>
            </div>
            <Footer />
        </nav>
    )
}

export default Top;