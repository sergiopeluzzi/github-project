import React, { Component } from 'react'
import { View, Text, VirtualizedList, StyleSheet } from 'react-native'
import api from '../services/api'

export default class Repositorios extends Component {
    state = {
        repos: 0,
        ultimoRepo: ''
    }

    componentDidMount() {
        this.loadRepos()
    }

    loadRepos = async () => {
        const response = await api.get('/sergiopeluzzi/repos')
        const repos = response.data

        this.setState({
            repos: repos.length,
            ultimoRepo: repos[repos.length - 1].name
        });
    }
    
    render() {
        return (
            <View style={ styles.container }>
                <View style={ styles.contNum }>
                    <Text>Número de Repositórios</Text>
                    <Text style={ styles.num }>
                        { this.state.repos }
                    </Text>
                </View>
                <View style={ styles.contNum }>
                    <Text>Ultimo Repositório</Text>
                    <Text style={ styles.num }>
                        { this.state.ultimoRepo }
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    num: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        color: '#888'
    },
    contNum: {
        alignItems: 'flex-end'
    },
    container: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10
    }
})