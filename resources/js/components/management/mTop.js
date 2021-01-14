import React, { useEffect, useState } from 'react';
import axios from "axios";

function MTop() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await axios.get('/api/users');
        setUsers(response.data.users)
    }
    
    //登録ボタンがクリックされたら
    const addUser = () => {
        const data = {
            account_name: $('.account_name').val(),
            farmname: $('.farmname').val(),
            name: $('.name').val(),
            kana: $('.kana').val(),
            email: $('.email').val(),
            password: $('.password').val(),
            postcode: $('.postcode').val(),
            pref: $('.pref').val(),
            municipality: $('.municipality').val(),
            building: $('.building').val(),
            TEL: $('.TEL').val()
        }
        axios.post("/api/users", data)
            .then(() => {
                console.log("DB追加");
                getUsers();
                Clear();
            })
    };

    const deleteUser = (id) => {
        axios.delete(`/api/users/${id}`).then(() => {
            console.log("DB削除");
            getUsers();
        });
    }

    function Clear() {
        for (var i = 1; i <= 12; i++) {
            document.getElementById("form" + i).value = '';
        }
    }
    return (
        <div className="top-page">
            <div className="list-form">
                <table className="usertable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>アカウント名</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.account_name}</td>
                                <td><a href={`/management/user/${user.id}`}>詳細</a></td>
                                <td><button className="general-button" onClick={() => deleteUser(user.id)}>削除</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="edit-form">
                <h2 className="general">アカウント登録</h2>
                <p>アカウント名：<input type="text" id="form1" className="account_name" /></p>
                <p>農家名：<input type="text" id="form2" className="farmname" /></p>
                <p>氏名：<input type="text" id="form3" className="name" /></p>
                <p>氏名(フリガナ)：<input type="text" id="form4" className="kana" /></p>
                <p>メールアドレス：<input type="text" id="form5" className="email" /></p>
                <p>パスワード：<input type="password" id="form6" className="password" /></p>
                <p>パスワード(確認)：<input type="password" id="form7" className="password2" /></p>
                <p>郵便番号(※ハイフンは含まない)：<input type="text" id="form8" className="postcode" /></p>
                <p>都道府県：<input type="text" id="form9" className="pref" /></p>
                <p>市区町村名：<input type="text" id="form10" className="municipality" /></p>
                <p>番地・建物名：<input type="text" id="form11" className="building" /></p>
                <p>電話番号：<input type="text" id="form12" className="TEL" /></p>
                <button className="general-button" onClick={() => addUser()}>登録</button>
                <button className="general-button" onClick={Clear}>クリア</button>
            </div>
        </div>
    )
}


export default MTop;