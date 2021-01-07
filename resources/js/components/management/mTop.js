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

    const [name,account_name, setInput] = useState([]);
    //登録ボタンがクリックされたら
    const addUser = () => {
        if (!!name) {
            const data = {
                account_name:account_name,
                name: name
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

    function Clear(){
        document.getElementById("form1").value = '';
        document.getElementById("form2").value = '';
        document.getElementById("form3").value = '';
        document.getElementById("form4").value = '';
        document.getElementById("form5").value = '';
        document.getElementById("form6").value = '';
        document.getElementById("form7").value = '';
        document.getElementById("form8").value = '';
        document.getElementById("form9").value = '';
        document.getElementById("form10").value = '';
        document.getElementById("form11").value = '';
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
                <p>アカウント名：<input type="text" id="form1" name="accountname" defaultValue={account_name} /></p>
                <p>農家名：<input type="text" id="form2" /></p>
                <p>氏名：<input type="text" id="form3" name="user" defaultValue={name} onChange={e => setInput(e.target.value)} /></p>
                <p>氏名(フリガナ)：<input type="text" id="form4" /></p>
                <p>メールアドレス：<input type="text" id="form5" /></p>
                <p>パスワード：<input type="password" id="form6" /></p>
                <p>パスワード(確認)：<input type="password" id="form7" /></p>
                <p>郵便番号(※ハイフンは含まない)：<input type="text" id="form8" /></p>
                <p>市区町村名：<input type="text" id="form9" /></p>
                <p>番地・建物名：<input type="text" id="form10" /></p>
                <p>電話番号：<input type="text" id="form11" /></p>
                <button className="general-button" onClick={() => addUser()}>登録</button>
                <button className="general-button" onClick={Clear}>クリア</button>
            </div>
        </div>
    )
}


export default MTop;