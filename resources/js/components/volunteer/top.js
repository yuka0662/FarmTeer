import React from 'react';
import Header from './vHeader'
import Footer from './vFooter'

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
                    <h2 className="volunteer-text">ボランティア募集登録</h2>
                    <p>案件名：<input type="text" /></p>
                    <p>実施日：<input type="text" /></p>
                    <p>募集人数：<input type="text" /></p>
                    <p>募金額：<input type="text" /></p>
                    <p>詳細：<input type="textarea" /></p>
                    <div className="vo_sl0 edit">
                    カテゴリー：
                        <select id="category" name="category">
                            <option value="選択してください" >カテゴリーを選択</option>
                            <option value="1"></option>
                            <option value="2"></option>
                            <option value="3"></option>
                            <option value="4"></option>
                        </select>
                    </div>
                    <p>写真：
                    <input type="file" accept="image/png, image/jpeg, image/gif" onChange={imageHander} />
                        <img id="preview" src=""></img>
                    </p>
                    <button className="volunteer-edit-button">追加</button>
                    <button className="volunteer-edit-button">変更</button>
                    <button className="volunteer-edit-button">削除</button>
                </div>
            </div>
            <Footer />
        </nav>
    )
}

export default Top;