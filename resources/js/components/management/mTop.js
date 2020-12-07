import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Top extends Component {
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
                            </tr>
                        </thead>
                        <tbody>
                            <RenderRows users={this.state.users} />
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

ReactDOM.render(<mTop />, document.getElementById('mtop'));