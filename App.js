import React, { Component } from 'react';
import {  View, StyleSheet, WebView, Text} from 'react-native';
import {TabBarIcon} from './components/TabBarIcon';

class App extends Component {
  constructor(){
    super();
    this.state = {
      number: 2
    }
  }
  render() {
    return (

          <View style = {styles.box2}>
            <TabBarIcon/>
          </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'red'
  },
  box1: {
    flex:1,
    backgroundColor: 'red'
  },
  box2: {
    flex:1,
    backgroundColor: 'skyblue'
  }
});
export default App;
