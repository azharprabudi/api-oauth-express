import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.alias}</td>
                <td><button className="btn btn-info" onClick={() => this.props.navigate(this.props.id)}>Detail</button></td>
            </tr>
        );
    }
}

export default Item;