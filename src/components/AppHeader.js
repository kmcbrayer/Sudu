import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class AppHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>
                    {this.props.text}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 10
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 1
    }
});
