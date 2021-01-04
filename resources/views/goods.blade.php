@extends('layout')
@section('content')
    
<div className="farm-top">
    <div className="column">
        <div className="add1">
            <h2>商品追加</h2>
            <div>商品名<input className="textm" type="text" /></div>
            <div>価格　<input className="textm" type="text" /></div>
            <div>数量　<input className="textm" type="text" /></div>

            <div>
                <input className="rad" type="radio" name="nouyaku" value="no" />無農薬
        </div>
            <div>
                <input className="rad" type="radio" name="nouyaku" value="yes" />農薬を使用している
        </div>
            <div><input className="textm" type="text" /> </div>
        </div>
        <div className="add2">
            <div>詳細　<textarea className="textm" /></div>
            <div>種別　<input className="textm" type="text" /></div>
            <div><input className="photobtn" type="button" value="写真を追加する" /></div>
            <div><input className="farmbtn" type="button" value="追加" /></div>
        </div>
    </div>
</div>
@endsection