import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom'; 
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import { link } from '../general/api';

class Signin extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.doLogin = this.doLogin.bind(this);
    }
    handleOnChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }
    doLogin() {
        const { username, password } = this.state;
        if (username && password) {
            axios.post(
                `${link}auth/login`, 
                queryString.stringify({
                    username,
                    password,
                    client_id: 'secret',
                    client_secret: 'secret',
                    grant_type: 'password'
                }),
                {
                    headers:  { 'Content-Type': 'application/x-www-form-urlencoded' }
                }
            ).then(result => {
                this.props.history.push({
                    pathname: '/users', 
                    state: { access_token: result.data.access_token }
                });
            }).catch(err => console.log(err));
        } else {
            alert('Beberapa field masih kosong');
        }
    }
    render() {
        return (
            <div className="container" style={{ paddingTop: 200 }}>
                <div className="col-md-6 col-xs-12 col-md-offset-3 text-center" style={{ paddingTop: 15, paddingBottom: 15, backgroundColor: '#f3f3f3', borderRadius: 5 }}>
                    <h2>Human Resource Management</h2>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" id="username" className="form-control" onChange={this.handleOnChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" id="password" className="form-control" onChange={this.handleOnChange}/>
                    </div>
                    <button type="button" className="btn btn-success" onClick={this.doLogin}>
                        Masuk
                    </button>
                    {
                        /*<Link to="/users" className="btn btn-success btn-block" type="button">Masuk</Link>*/
                    }
                </div>
            </div>
        );
    }
}

export default Signin;