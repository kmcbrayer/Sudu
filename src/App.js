import React, { Component } from 'react';
import { View, Text } from 'react-native';

import UpNext from './components/UpNext.js';

export default class App extends Component {
    render() {
        return (
            <View>
                <UpNext />
            </View>
        );
    }
}
