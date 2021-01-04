import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

export default class FGoods extends Component {
    constructor() {
        super();
        this.state = {
            tasks: []
        };
    }
    componentDidMount(){
        axios
            .post('/api/fgoods')
            .then(Response => {
                this.setState({
                    fgoods:Response.data
                });
            }).catch(error => {
                console.log(error);
            });
        }
        render(){
            const list = this.state.tasks.map((item) => {
                return <li key={item.id}>{item.title}</li>;
                ReactDOM.render(<Fgoods />, document.getElementById('fgoods'));
            });
            return(
                <div>
                    <ul>
                        {list}
                    </ul>
                </div>
                
            );
        }
    }

