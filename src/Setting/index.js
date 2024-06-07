import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from 'react-native-paper';

const Setting = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

export default Setting;

const createStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fbfbfb',
    },
  });
