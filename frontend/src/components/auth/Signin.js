import React, { Component } from 'react';
import axios from 'axios';
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
            /*
            axios.post(
                `${link}auth/login`, 
                queryString.stringify({
                    username,
                    password,
                    client_id: null,
                    client_secret: null,
                    grant_type: 'password'
                })
            ).then(result => console.log(result))
            .catch(err => console.log(err));
            */
            console.log(this.props);
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
                    <Link to="/users" className="btn btn-success btn-block" type="button">Masuk</Link>
                </div>
            </div>
        );
    }
}

export default Signin;