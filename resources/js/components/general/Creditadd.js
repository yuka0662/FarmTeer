import React from 'react';
import axios from "axios";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CreditCardIcon from '@material-ui/icons/CreditCard';

function Creditadd() {
    //追加ボタンがクリックされたら
    function add() {
        const data = {
            cardnum: $('#num').val(),
            cardname: $('#name').val(),
            month: $('#month').val(),
            year: $('#year').val(),
            securitycode: $('#code').val(),
        }
        axios.post("/api/creditadd", data)
            .then(() => {
                console.log("DB追加");
            })
    }
    return (
        <nav className="buy-page">
            <div className="form">
                <h2 className="general">クレジットカードの追加</h2>
                <div>
                    <CreditCardIcon /><input type="text" id='num' placeholder="カード番号" />
                </div>
                <div>
                    カード名義：<br />
                    <input type="text" id='name' placeholder="YASAI TAROU" />
                </div>
                <div>
                    期限:<br />
                    <input type="text" id='month' placeholder="MM" />/<input type="text" id='year' placeholder="YY" />
                </div>
                <div>
                    セキュリティコード<HelpOutlineIcon />:<br />
                    <input type="text" id='code' placeholder="必須" />
                </div>
                <button className="general-button" onClick={add}>追加する</button>
            </div>
        </nav>
    )
}

export default Creditadd;