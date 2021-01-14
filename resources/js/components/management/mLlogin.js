import React,{Component} from 'react';

class Login extends Component {
    render() {
        return (
            <nav>
                <div className="login-page">
                    <div className="form">
                        <h2 className="general">ログイン</h2>
                        <form className="login-form">
                            <input type="text" placeholder="管理者名" />
                            <input type="password" placeholder="パスワード" />
                            <button className="general-button">ログイン</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Login;