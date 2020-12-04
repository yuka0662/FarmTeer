import React from 'react';
import { Link } from 'react-router-dom';

function Notice() {
    const buttonclick = () => {
        alert("報告が完了しました");
        window.location.href = '/';
    }
    $(document).ready(function () {
        alert("ご報告いただいた内容は、詳細を調査の上、適切に対応いたします。該当商品の削除をお約束するものではありませんので、あらかじめご了承ください。");
    });
    return (
        <nav className="notice-page">
            <div className="form">
                <h3　className="notice-product">対象商品</h3>
                <div className="notice-product">
                    <img src="../../../images/tomato.jpg" alt="対象商品" />
                    国産トマト
                </div>
                <h3　className="notice-product">報告理由</h3>
                <div　className="notice-product">
                    <select id="" name="">
                        <option value="選択してください" >選択してください</option>
                        <option value="1">関係のない画像が貼られている</option>
                        <option value="2">関係のない商品が売られている</option>
                        <option value="3">宣伝・捜し物・福袋</option>
                        <option value="4">他サービス誘導・直接取引・交換</option>
                        <option value="5">実物の画像がない</option>
                        <option value="6">その他</option>
                    </select>
                </div>
                <p　className="notice-product">
                    商品の報告に関するガイドは<Link to="/guid">こちら</Link>をご覧ください。<br />
                    取引中のトラブルなど、事務局サポートが必要な場合はお問い合わせフォームからご連絡ください。
                </p>
                <button className="general-button" onClick={buttonclick}>事務局に報告する</button>
            </div>
        </nav>
    )
}
export default Notice;