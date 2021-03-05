import React, { Component } from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export default class Info extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Image style={ styles.img } source={ this.props.src } />
                <Text style={ styles.txt }>{ this.props.children }</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img: {
        width: 30,
        height: 30,
        marginRight: 5,
        tintColor: '#f55'
    },
    container: {
        flexDirection: 'row',
        padding: 2
    },
    txt: {
        fontSize: '1.1em'
    }
})