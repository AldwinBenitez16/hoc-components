import React, { Component } from 'react';
import TableRow from './TableRow';

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    tabRow() {
        if(this.props.data instanceof Array) {
            this.props.data.map((object, i) => {
                return <TableRow obj={object} key={i} />;
            })
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

export default UserList;