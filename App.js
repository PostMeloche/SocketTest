import React from 'react';
import {ReactNative, AppRegistry, View, Text} from 'react-native';
//import openSocket from 'socket.io-client';
//const socket = openSocket('http://localhost:3000');
import { subscribeToTimer } from './api';

export default class App extends React.Component {
  constructor(props) {
      super(props);

      subscribeToTimer((err, timestamp) => this.setState({
        timestamp
      }));
  }   

  state = {
    timestamp: 'no timestamp yet'
  };
  
  render() {
      return(
          <View>
              <Text>
                  {this.state.timestamp}
              </Text>
          </View>
      );
  } 
}

AppRegistry.registerComponent('sockettest', () => App);