import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MTop extends Component {
    
    //コンストラクタ内でstateにtodosを宣言
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    //コンポーネントがマウントされた時点で初期描画用のtodosをAPIから取得
    componentDidMount() {
        axios
            .get('/api/get')
            .then((res) => {
                //todosを更新（描画がかかる）
                this.setState({
                    users: res.data
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
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
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user) =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.kana}</td>
                                    <td><a href={`/user/${user.id}`}>詳細</a></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="edit-form">
                    <h2>アカウント登録</h2>
                    <p>アカウント名：<input type="text" /></p>
                    <p>パスワード：<input type="password" /></p>
                    <p>パスワード(確認)：<input type="password" /></p>
                    <p>農家名・団体名：<input type="text" /></p>
                    <p>農家名・団体名(フリガナ)：<input type="text" /></p>
                    <p>氏名：<input type="text" /></p>
                    <p>氏名(フリガナ)：<input type="text" /></p>
                    <p>住所：<input type="text" /></p>
                    <p>メールアドレス：<input type="text" /></p>
                    <p>電話番号：<input type="text" /></p>
                    <button className="edit-button">追加</button>
                    <button className="edit-button">変更</button>
                    <button className="edit-button">削除</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<MTop />, document.getElementById('mtop'));