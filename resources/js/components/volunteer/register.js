import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './vFooter'
import css from '../../../css/components/App.css'
import Icon from '../../../images/FTlogo.png'

function Register() {
    return (
        <div>
            <div>
                <link rel="stylesheet" href={css} />
            </div>
            <div className="volunteer-header">
                <div className="headline">
                    <Link to="/">
                        <img src={Icon} alt="ロゴ" />
                    </Link>
                </div>
            </div>
            <div className="step-bar">
                <ul>
                    <li>
                        <div className="number active">1</div>
                        <div className="text">アカウント情報</div>
                    </li>
                    <li>
                        <div className="number">2</div>
                        <div className="text">住所</div>
                        <div className="line"></div>
                    </li>
                    <li>
                        <div className="number">3</div>
                        <div className="text">メール・電話番号</div>
                        <div className="line"></div>
                    </li>
                </ul>
            </div>
            <h1 className="volunteer-form-name">新規登録申請</h1>
            <form>
                <div className="account-setup register-form">
                    <h2>Step 1</h2>
                    <input name="volunteername" type="text" placeholder="団体名" />
                    <input name="volunteerfurigana" type="text" placeholder="団体名(フリガナ)" />
                    <input name="name" type="text" placeholder="氏名" />
                    <input name="furigana" type="text" placeholder="氏名(フリガナ)" />
                    <div className="button firstNext">次へ</div>
                </div>
                <div className="user-details register-form">
                    <h2>Step 2</h2>
                    〒<input type="text" id="postcode1" name="postcode1" maxLength="3" placeholder="郵便番号" />
                    ー<input type="text" id="postcode2" name="postcode2" maxLength="4" />
                    <div className="cp_ipselect vo_sl03">
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
                    <input type="text" id="address2" name="address2" placeholder="市区町村" />
                    <input type="text" id="address3" name="address3" placeholder="番地・ビル名" />
                    <div className="button firstPrev">戻る</div>
                    <div className="button secondNext">次へ</div>
                </div>
                <div className="finish-step register-form">
                    <h2>Step 3</h2>
                    <input type="text" placeholder="メールアドレス" />
                    <input type="text" placeholder="電話番号" />
                    <div className="button secondPrev">戻る</div>
                    <div className="button disabled">確認</div>
                    <p className="volunteer-message">アカウントをお持ちの方はこちら <Link to="/volunteer/login">ログイン</Link></p>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Register;

$('document').ready(function () {
    let steps = $('.step-bar ul li');

    // First step
    $('.firstNext').on('click', (e) => {
        setTimeout(() => {
            $(steps[1]).find('.number').addClass('active');
        }, 1000);

        $(steps[1]).find('.line').addClass('line-active');
        $('.account-setup').css('left', '-4000px');
        $('.user-details').css('left', 'calc(50% - 175px)');
    });

    // Second step
    $('.secondNext').on('click', (e) => {
        setTimeout(() => {
            $(steps[2]).find('.number').addClass('active');
        }, 1000);

        $(steps[2]).find('.line').addClass('line-active');
        $('.user-details').css('left', '-4000px');
        $('.finish-step').css('left', 'calc(50% - 175px)');
    });

    $('.firstPrev').on('click', (e) => {
        $(steps[1]).find('.number').removeClass('active');
        $(steps[1]).find('.line').removeClass('line-active');
        $('.user-details').css('left', '4000px');
        $('.account-setup').css('left', 'calc(50% - 175px)');
    });

    // Last step
    $('.secondPrev').on('click', (e) => {
        $(steps[2]).find('.number').removeClass('active');
        $(steps[2]).find('.line').removeClass('line-active');
        $('.finish-step').css('left', '4000px');
        $('.user-details').css('left', 'calc(50% - 175px)')
    });
});