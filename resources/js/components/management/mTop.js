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

    const [input, setInput] = useState([]);
    //登録ボタンがクリックされたら
    const addUser = () => {
        if (!!input) {
            const data = {
                name: input
            }
            axios.post("/api/users", data)
                .then(() => {
                    console.log("DB追加");
                    getUsers();
                    setInput("");
                })
        }
    };

    const deleteUser = (id) => {
        axios.delete(`/api/users/${id}`).then(() => {
            console.log("DB削除");
            getUsers();
        });
    }
    return (
        <div className="top-page">
            <div className="list-form">
                <table className="usertable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>名前</th>
                            <th>フリガナ</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.kana}</td>
                                <td><a href={`/management/user/${user.id}`}>詳細</a></td>
                                <td><button className="general-button" onClick={() => deleteUser(user.id)}>削除</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="edit-form">
                <h2 className="general">アカウント登録</h2>
                <p>アカウント名：<input type="text" /></p>
                <p>パスワード：<input type="password" /></p>
                <p>パスワード(確認)：<input type="password" /></p>
                <p>農家名：<input type="text" /></p>
                <p>農家名(フリガナ)：<input type="text" /></p>
                <p>氏名：<input type="text" name="user" defaultValue={input} onChange={e => setInput(e.target.value)} /></p>
                <p>氏名(フリガナ)：<input type="text" /></p>
                <p>住所：<input type="text" /></p>
                <p>メールアドレス：<input type="text" /></p>
                <p>電話番号：<input type="text" /></p>
                <p>区分：<input type="text" /></p>
                <button className="general-button" onClick={() => addUser()}>登録</button>
                <button className="general-button">クリア</button>
            </div>
        </div>
    )
}


export default MTop;