import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{Component} from 'react'

export default class Order extends Component {
  render(){
    return(<View style={styles.container}>
        <Text>Order Screen</Text>
        <StatusBar style="auto" />
      </View>
      )
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
