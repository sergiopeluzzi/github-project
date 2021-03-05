import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class Separador extends Component {
    render() {
        return (
            <View style={ styles.sep }></View>
        )
    }

}

const styles = StyleSheet.create({
    sep: {
        backgroundColor: '#f55',
        height: 5,
        width: 200,
        borderRadius: 50,
        marginTop: 20,
        marginBottom: 20
    }
})