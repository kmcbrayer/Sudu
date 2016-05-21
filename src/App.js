import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AppHeader from './components/AppHeader.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }


    componentDidMount() {
        this.getInitialState()
    }

    getInitialState() {
        this.setState({liked: true});
    }

    render() {
        var liked = this.state.liked ? 'likes it' : 'not lovin it';
        return (
            <View>
                <AppHeader />
                <Text>{this.state.liked}</Text>
            </View>
        );
    }
}
