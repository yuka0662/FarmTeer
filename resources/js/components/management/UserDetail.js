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
            区分１：農家　区分２：一般
            <p>ID：{user.id}</p>
            <p>区分：{user.part_id}</p>
            <p>名前：{user.name}</p>
            <p>名前(フリガナ)：{user.kana}</p>
            <p>電話番号：{user.TEL}</p>
            <p>メールアドレス：{user.email}</p>
        </div>
    );
}

export default UserDetail;