import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/bg_image.png'

function Top() {
    return (
        <nav>
            <div>
                <img src={Image} alt="画像" />
            </div>
            <div>
                
                <p>寄付対象商品</p>
            </div>
        </nav>
    )
}

export default Top;