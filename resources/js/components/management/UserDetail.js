import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserDetail(props) {

    const [user, setUser] = useState([]);
    
    useEffect(() => {
        getUser()
    },[])

    const getUser = async () => {
        // console.log(props.match)
        const response = await axios.get(`/api/user/${props.match.params.id}`);
        setUser(response.data.user)
    }

    return (
        <div className="userdetail-page">
            <h1 className="general">User詳細ページ</h1>
            <p>アカウント名：{user.account_name}</p>
            <p>農場名：{user.farmname}</p>
            <p>名前：{user.name}</p>
            <p>名前(フリガナ)：{user.kana}</p>
            <p>電話番号：{user.TEL}</p>
            <p>メールアドレス：{user.email}</p>
            <p>郵便番号：{user.postcode}</p>
            <p>都道府県：{user.pref}</p>
            <p>市区町村名：{user.municipality}</p>
            <p>番地・建物名：{user.building}</p>
        </div>
    );
}

export default UserDetail;