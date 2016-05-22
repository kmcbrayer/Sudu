import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AppHeader from './AppHeader.js';

export default class UpNext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: 'Up Next'
        };
    }

    componentDidMount() {
        this.getInitialState()
    }

    getInitialState() {
        this.setState({liked: true});
    }

    render() {
        return (
            <View>
                <AppHeader text={this.state.headerText}/>
                <Text>text goes here</Text>
            </View>
        );
    }
}
