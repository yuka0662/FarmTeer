import React from 'react';
import Img01 from '../../images/Img01.png'
import Img02 from '../../images/Img02.png'
import Img03 from '../../images/Img03.png'
import Img04 from '../../images/Img04.png'

function Farmteer() {
    return (
        <nav>
            <div className="first-page">
                <div className="slideBox">
                    <img className="item1" src={Img01} alt="野菜" />
                    <img className="item1" src={Img02} alt="野菜" />
                    <img className="item1" src={Img03} alt="野菜" />
                    <img className="item1" src={Img04} alt="ボランティア" />
                </div>
                <div className="first">
                    <h2>Farmteerってなに？</h2>
                    <p>
                        Farmteerは野菜や果物などをお得に買え、
                        1購入=120円途上国の食糧支援のため募金される、
                        そんなオンラインのファーマーズマーケットです。
                    </p>
                    <br />
                    <p>
                        皆さん、知っていますか？<br />
                        日本で1年間に捨てられる食品の量は約612万トンであり、
                        国連WFPが1年間で支援する量の1.5倍の量です。
                        そして、形が悪い・規格に合わない(大きすぎる・小さすぎる)・
                        傷がついているなどの理由で市場に出荷できず、
                        捨てられてしまう野菜や果物は1年間で200万トンあります。
                        中身は同じなのに捨てられてしまうのはもったいない。
                        食品ロス削減の取り組みを寄付として、途上国の食糧支援に役立てたい。
                    </p>
                    <br />
                    <p>
                        「ユニーク」な見た目の野菜や果物を、
                        生産者と直接コミュニケーションを取りながら自由に取引してもらうことで、
                        1購入＝120円の寄付になり、途上国への食糧支援となります。</p>
                    <p>
                    
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Farmteer;