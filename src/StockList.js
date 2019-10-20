import React, { Component } from 'react';
import TableRow from './TableRow';

class StockList extends Component {
    constructor(props) {
        super(props);
    }

    tabRow() {
        if(this.props.data instanceof Array) {
            return this.props.data.map((object, i) => {
                return <TableRow obj={object} key={i} />;
            });
        }
    }

    render() {
        return(
            <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
            </div>
        )
    }
}

export default StockList;