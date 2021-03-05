import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Nome from './src/components/Nome';
import Foto from './src/components/Foto';
import Info from './src/components/Info';
import Repositorios from './src/components/Repositorios';
import Separador from './src/components/Separador';

export default class App extends Component {
    render() {
        return (
        <View style={styles.container}>
            <TextInput style={{ height: 40, width: 200, backgroundColor: '#fff', marginTop: 20, borderRadius: 30, padding: 10, fontSize: '1.2em', textAlign: 'center', color: '#888' }} />

            <Nome></Nome>
            <Foto></Foto>
            <Info src="https://image.flaticon.com/icons/png/512/666/666162.png">
              sergiopeluzzi@gmail.com
            </Info>
            <Info src="https://i.pinimg.com/originals/b5/d7/19/b5d7198734ee5174b581630628ecfdd6.png">
              (69) 9 8467-8083
            </Info>
            <Separador></Separador>
            <Repositorios></Repositorios>
            <StatusBar style="auto" />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
    margin: 20,
    borderRadius: 10
  },
  nome: {
    fontFamily: 'Courier New',
    fontSize: '2em'
  },
  sobrenome: {
    fontFamily: 'roboto',
    fontSize: '2.3em',
    color: '#f55'
  }
});
