import React, { Component } from 'react';

import { View, Text } from 'react-native';

export default class Main extends Component {

    static navigationOptions = {
        title: 'JSHunt',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <>
                <View>
                    <Text>Olá Mundo parte 2</Text>
                </View>
            </>
        );
    }
}