import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AppHeader from './AppHeader.js';
import DoList from './DoList';

export default class UpNext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: 'Up Next'
        };
    }

    render() {
        return (
            <View>
                <AppHeader text={this.state.headerText}/>
                <DoList />
            </View>
        );
    }
}
