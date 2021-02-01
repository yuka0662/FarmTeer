import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyDetail(props) {

    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        // console.log(props.match)
        const response = await axios.get(`/api/gusers`);
        setUser(response.data.user)
    }

    return (
        <div className="farm-page">
            <div className="form">
                <h1 className="general">マイページ</h1>
                <p>アカウント名：<input type="text"></input></p>
                <p>農場名：<input type="text" value="スイタ農場"></input></p>
                <p>名前：<input type="text"></input></p>
                <p>名前(フリガナ)：<input type="text"></input></p>
                <p>電話番号：<input type="text"></input></p>
                <p>メールアドレス：<input type="text" value="5634@aaa.ac.jp"></input></p>
                <p>郵便番号：<input type="text" value="滋賀"></input></p>
                <p>都道府県：<input type="text" value="犬上郡多賀町多賀６０１"></input></p>
                <p>市区町村名：<input type="text" value="糸切餅総本家 多賀や"></input></p>
                <p>番地・建物名：<input type="text" value="0120444554"></input></p>
                <button className="general-button">登録</button>
            </div>
        </div>
    );
}

export default MyDetail;