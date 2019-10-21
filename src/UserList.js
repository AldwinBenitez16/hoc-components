import React, { Component } from 'react';
import TableRow from './TableRow';

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    tabRow = () => {
        let rows = [];
        if(this.props.data instanceof Array) {
            return this.props.data.map(function(object, i) {
                return rows.push(<TableRow obj={object} key={i} />);
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