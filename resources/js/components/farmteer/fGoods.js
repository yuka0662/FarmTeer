import React, { useEffect, useState } from 'react';
import axios from "axios";

function fGoods() {
    const [farmlists, setFarmlists] = useState([]);

    useEffect(() => {
        getFarmlists();
    }, [])

    const getFarmlists = async () => {
        const response = await axios.get('/api/goods');
        setFarmlists(response.data.goods)
    }

    const deleteList = (id) => {
        axios.delete(`/api/goods/${id}`).then(() => {
            console.log("DB削除");
            getUsers();
        });
    }

    return (
        <div className='farm-page'>
            <h1 className='general'>商品一覧</h1>
            <form>
                <div>
                    {farmlists.map(farmlist => (
                        <p key={farmlist.id}>
                            {farmlist.goodsname}
                            <a href={`/fgoods/${farmlist.id}`}>詳細</a>
                            <button className="general-button" onClick={() => deleteList(farmlist.id)}>削除</button>
                        </p>
                    ))}
                </div>
            </form>
        </div>
    )
}


export default fGoods;