import React, { useEffect, useState } from 'react';
import axios from "axios";

function fRegister() {
    //登録ボタンが押されたとき
    const fadd = () => {
        const data = {
            farmname: $('.farmname').val(),
            email: $('.email').val(),
            postcode: $('.postcode').val(),
            pref: $('.pref').val(),
            municipality: $('.municipality').val(),
            building: $('.building').val(),
        }

        axios.post("/api/farmregister", data)
            .then(() => {
                console.log("addsellersテーブルにデータを追加");
                Clear();
            })
    };

    function Clear() {
        for (var i = 1; i <= 6; i++) {
            document.getElementById("form" + i).value = '';
        }
    }

    return (
        <nav>
            <div className="register-page">
                <div className="form">
                    <h1 className="general">出品者申請</h1>
                    <form className="farmlogin">
                        <p>
                            農園名/個人名：<input type="text" id="form1" className="farmname"></input>
                        </p>
                        <p>
                            メールアドレス：<input type="text" placeholder="xxxx@xx.xxx" id="form2" className="email"/>
                        </p>
                        <p>
                            郵便番号：<input type="text" id="form3" className="postcode"></input>
                        </p>
                        <p>
                            都道府県：<input type="text" id="form4" className="pref"></input>
                        </p>
                        <p>
                            市区町村：<input type="text" id="form5" className="municipality"></input>
                        </p>
                        <p>
                            建物・ビル名：<input type="text" id="form6" className="building"></input>
                        </p>
                        <button className="farm-button" onClick={() => fadd()}>申請</button>
                        <button className="farm-button" onClick={() => Clear()}>リセット</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default fRegister;