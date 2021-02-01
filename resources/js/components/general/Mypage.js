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
                <p>名前：<input type="text"></input></p>
                <p>名前(フリガナ)：<input type="text"></input></p>
                <p>email：<input type="text" value="5634@aaa.ac.jp"></input></p>
                <p>郵便番号：<input type="text"></input></p>
                <p>都道府県：<input type="text"></input></p>
                <p>市区町村：<input type="text"></input></p>
                <p>ビル・建物名：<input type="text"></input></p>
                <p>電話：<input type="text"></input></p>
                <button className="general-button">登録</button>
            </div>
        </div>
    );
}

export default MyDetail;