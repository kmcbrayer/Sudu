import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

import Dos from '../fakeDoList.js';

export default class DoList extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([])
        }
    }

    componentWillMount() {
        this.getInitialState()
    }

    getInitialState() {
        this.setState({ dataSource: this.state.dataSource.cloneWithRows(Dos) });
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData.title}</Text> }
            />
        );
    }
}
