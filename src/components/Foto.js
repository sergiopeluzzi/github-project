import React, { Component } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import api from '../services/api'

export default class Foto extends Component {
    state = {
        uri: ''
    }
    
    componentDidMount() {
    this.loadFoto()
    }

    loadFoto = async () => {
        const response = await api.get('/sergiopeluzzi')
        const user = response.data

        this.setState({
            uri: user.avatar_url
        })
    }

    render() {
        const pic = {
            uri: this.state.uri
        }
        return (
            <View>
                <Image style={ styles.foto } source={ pic } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    foto: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: '#f55',
        borderWidth: 2,
        marginTop: 20,
        marginBottom: 20
    }
})