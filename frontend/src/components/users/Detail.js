import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { link, token } from '../general/api';

class Detail extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            load: true
        };
        this.backToBefore = this.backToBefore.bind(this);
    }
    componentDidMount() {
        axios.get(`${link}user/${this.props.history.location.state.id}?access_token=${this.props.history.location.state.access_token}`)
        .then(result => this.setState({ data: result.data.message, load: false }))
        .catch(err => console.log(err));
    }
    backToBefore() {
        this.props.history.goBack();
    }
    render() {
        if (this.state.load) return <p>Loading ....</p>
        else {
            return (
                <div className="container" style={{ paddingTop: 100 }}>
                    <div className="col-md-12 col-xs-12 text-left">
                        <button type="button" onClick={this.backToBefore} className="btn btn-warning">Kembali</button>
                    </div>
                    <div className="col-md-12 col-xs-12 text-center">
                        <h3>Target Kerjaan Saat Ini</h3>
                        <h2>{this.state.data.remaining_target} <sub>Tercapai</sub> / {this.state.data.max_target} <sub>Target</sub> </h2>
                    </div>
                    <div className="col-md-12 col-xs-12" style={{backgroundColor: '#f3f3f3',paddingBottom: 15, marginTop: 10, marginBottom: 10}}>
                        <h3>Informasi Karyawan</h3>
                        <div className="row">
                            <div className="col-md-6 col-xs-12">
                                <div style={{ marginTop: 10, marginBottom: 10, borderBottomWidth: 0.5, borderBottomStyle: 'solid', borderBottomColor: '#333333' }}>
                                    Nama: {this.state.data.name}
                                </div>
                                <div style={{ marginTop: 10, marginBottom: 10, borderBottomWidth: 0.5, borderBottomStyle: 'solid', borderBottomColor: '#333333' }}>
                                    NIK: {this.state.data.id}
                                </div>
                                <div style={{ marginTop: 10, marginBottom: 10, borderBottomWidth: 0.5, borderBottomStyle: 'solid', borderBottomColor: '#333333' }}>
                                    Gaji Saat Ini: {this.state.data.remaining_payroll}
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12">
                                <div style={{ marginTop: 10, marginBottom: 10, borderBottomWidth: 0.5, borderBottomStyle: 'solid', borderBottomColor: '#333333' }}>
                                    Gaji Pokok: {this.state.data.gaji_pokok}
                                </div>
                                <div style={{ marginTop: 10, marginBottom: 10, borderBottomWidth: 0.5, borderBottomStyle: 'solid', borderBottomColor: '#333333' }}>
                                    Gaji Harian: {this.state.data.gaji_harian}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-xs-12">
                        <h3>Informasi Karyawan</h3>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <td>Tanggal</td>
                                    <td>Jam Masuk</td>
                                    <td>Jam Pulang</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    _.map(this.state.data.detailPresensi, (value) => {
                                        return (
                                            <tr>
                                                <td>{moment(value.tanggal).format('MMMM Do YYYY, h:mm:ss a')}</td>
                                                <td>{value.jam_masuk}</td>
                                                <td>{value.jam_pulang}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

    }
}

export default Detail;