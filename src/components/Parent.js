import {Text, View} from 'react-native';
import React, {Component} from 'react';
import BottomTab from './BottomTab';

export class Parent extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <BottomTab />
      </View>
    );
  }
}

export default Parent;
