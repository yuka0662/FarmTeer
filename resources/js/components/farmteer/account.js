import React from 'react';
import Header from './fHeader'
import Footer from './fFooter'

function Account() {
    return (
        <nav>
            <Header />
            <div className="account-page">
                <h2 className="farmer-text">アカウント情報</h2>
                <p>ユーザー名：</p><input type="text" />
                <p>農家名：</p><input type="text" />
                <p>農家名(フリガナ)：</p><input type="text" />
                <p>氏名：</p><input type="text" />
                <p>氏名(フリガナ)：</p><input type="textarea" />
                <p>郵便番号：</p>〒<input type="text" id="postcode1" name="postcode1" maxLength="3" />
                ー<input type="text" id="postcode2" name="postcode2" maxLength="4" />
                <div className="ipselect cp_sl03">
                    <select id="address1" name="address1">
                        <option value="選択してください" >都道府県を選択</option>
                        <option value="1">北海道</option>
                        <option value="2">青森県</option>
                        <option value="3">岩手県</option>
                        <option value="4">宮城県</option>
                        <option value="5">秋田県</option>
                        <option value="6">山形県</option>
                        <option value="7">福島県</option>
                        <option value="8">茨城県</option>
                        <option value="9">栃木県</option>
                        <option value="10">群馬県</option>
                        <option value="11">埼玉県</option>
                        <option value="12">千葉県</option>
                        <option value="13">東京都</option>
                        <option value="14">神奈川県</option>
                        <option value="15">新潟県</option>
                        <option value="16">富山県</option>
                        <option value="17">石川県</option>
                        <option value="18">福井県</option>
                        <option value="19">山梨県</option>
                        <option value="20">長野県</option>
                        <option value="21">岐阜県</option>
                        <option value="22">静岡県</option>
                        <option value="23">愛知県</option>
                        <option value="24">三重県</option>
                        <option value="25">滋賀県</option>
                        <option value="26">京都府</option>
                        <option value="27">大阪府</option>
                        <option value="28">兵庫県</option>
                        <option value="29">奈良県</option>
                        <option value="30">和歌山県</option>
                        <option value="31">鳥取県</option>
                        <option value="32">島根県</option>
                        <option value="33">岡山県</option>
                        <option value="34">広島県</option>
                        <option value="35">山口県</option>
                        <option value="36">徳島県</option>
                        <option value="37">香川県</option>
                        <option value="38">愛媛県</option>
                        <option value="39">高知県</option>
                        <option value="40">福岡県</option>
                        <option value="41">佐賀県</option>
                        <option value="42">長崎県</option>
                        <option value="43">熊本県</option>
                        <option value="44">大分県</option>
                        <option value="45">宮崎県</option>
                        <option value="46">鹿児島県</option>
                        <option value="47">沖縄県</option>
                    </select>
                </div>
                <p>市区町村名：</p><input type="text" id="address2" name="address2" />
                <p>番地・建物名：</p><input type="text" id="address3" name="address3" />
                <p>メールアドレス：</p><input type="text" />
                <p>電話番号：</p><input type="text" />
                <p>パスワード：</p><input type="password" />
                <p><input type="password" placeholder="確認のためもう一度入力してください" /></p>
                <button className="farmer-edit-button">キャンセル</button>
                <button className="farmer-edit-button">保存</button>
                <button className="farmer-edit-button">アカウント削除申請</button>
            </div>
            <Footer />
        </nav>
    )
}

export default Account;