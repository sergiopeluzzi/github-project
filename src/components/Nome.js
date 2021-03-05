import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from '../services/api'

export default class Nome extends Component {

  state = {
    nome: '',
    sobrenome: ''
  }

  componentDidMount() {
    this.loadNome()
  }

  loadNome = async () => {
    const response = await api.get('/sergiopeluzzi')
    const user = response.data

    if(!user.name) {
      return
    }

    const arr = user.name.split(' ')
    const sobrenome = arr.slice(-1).toString()
    arr.splice(arr.length-1)
    const nome = arr.toString()

    this.setState({
      nome: nome,
      sobrenome: sobrenome
    })
  }

  render() {
      return (
          <View>
            <Text style={ styles.container }>
              <Text style={ styles.nome }>{ this.state.nome }</Text>
              <Text style={ styles.sobrenome }>{ this.state.sobrenome.toUpperCase() }</Text>
            </Text>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    nome: {
      fontFamily: 'Courier New',
      fontSize: '2em',
      color: '#888',
    },
    sobrenome: {
      fontFamily: 'arial black',
      fontSize: '2.3em',
      color: '#f55',
      fontWeight: 'bold'
    },
    container: {
      marginTop: 20
    }
  });
  