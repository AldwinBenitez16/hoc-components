import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return(
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj}</td>
            </tr>
        );
    }
}

export default TableRow;