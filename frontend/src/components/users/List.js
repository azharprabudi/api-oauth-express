import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import Item from './Item';
import { link, token } from '../general/api';

class List extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            load: true,
        };
    }
    componentDidMount() {
        axios.get(`${link}user?access_token=${token}`)
        .then(result => {
            this.setState({ load: false });
            this.setState({ data: result.data.message });
        }).catch(err => console.log(err));
    }
    renderList() {
        if (this.state.load === true) {
            return <tr><td colspan="5">Loading ...</td></tr>;
        }
        return _.map(_.filter(this.state.data, filter => filter.alias === 'resolver'), 
        (value, key) => {
            return <Item {...value} key={value.id} index={key+1} />
        });
    }
    render() {
        return (
            <div className="container" style={{ paddingTop: 100 }}>
                <div className="col-md-12 col-xs-12">
                    <h2>Daftar Pengguna</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>NIK</th>
                                <th>Nama</th>
                                <th>Bagian</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderList() }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default List;