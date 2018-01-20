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
                <td>
                    <Link to={`users/${this.props.id}`} className="btn btn-info">Detail</Link>
                </td>
            </tr>
        );
    }
}

export default Item;