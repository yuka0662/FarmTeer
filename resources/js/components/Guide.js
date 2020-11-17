import React from 'react';
import css from '../../css/components/App.css'

function Guide() {
    return (
        <nav>
            <link rel="stylesheet" href={css} />
            <div className="guide-page">
                <div className="form">
                <h2 className="general">ガイド</h2>
                <p>ガイドページはただいま作成中です。</p>
                <p>ご迷惑をおかけしますが、今しばらくお待ちください。</p>
                </div>
            </div>
        </nav>
    )
}

export default Guide;