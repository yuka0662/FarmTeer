import React from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

function Register() {

    //登録ボタンがクリックされたら
    function addUser() {
        if($('#mail').val()!='' && $('#pass').val()!='') {
            if ($('#pass').val() == $('#pass2').val()) {
                const data = {
                    email: $('#mail').val(),
                    password: $('#pass').val(),
                }
                axios.post("/api/gusers", data)
                    .then(() => {
                        console.log("DB追加");
                    })
            }else{
                document.getElementById('error').innerHTML = 'パスワードが違います。'
            }
        }else{
            document.getElementById('error').innerHTML = 'メールアドレスまたはパスワードが未入力です。'
        }
    };
    return (
        <nav>
            <div className="register-page">
                <div className="form">
                    <h2 className="general">ユーザー登録</h2>
                    <form className="register-form-general">
                        <div id="error" />
                        <input type="text" id="mail" placeholder="メールアドレス" />
                        <input type="password" id="pass" placeholder="パスワード" />
                        <input type="password" id="pass2" placeholder="確認のためもう一度入力してください" />
                        <button className="general-button" onClick={addUser}>登録</button>
                        <p className="message">アカウントをお持ちの方はこちら <Link to="/farmteer/login">ログイン</Link></p>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Register;