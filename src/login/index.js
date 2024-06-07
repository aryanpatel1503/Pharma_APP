import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
const logoImg = require('../images/LogoWithName.png');

const Welcome = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Text style={styles.title}>Let's get started!</Text>
      <Text style={styles.subtitle}>
        Login to enjoy the features we've provided, and save time!
      </Text>
      <View style={styles.innerDiv}>
        <Text>...</Text>
        <View style={styles.btnDiv}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={[styles.loginBtn, styles.btn]}
            activeOpacity={0.8}>
            <Text style={{color: '#FFFFFF'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={[styles.signupBtn, styles.btn]}
            activeOpacity={0.8}>
            <Text
              style={{
                color: theme.colors.themeColor,
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.loginText}>Are you a seller? Get here! </Text>
      </View>
    </SafeAreaView>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      flex: 1,
      backgroundColor: '#fbfbfb',
    },
    logo: {
      marginTop: 158,
      marginBottom: 28,
    },
    title: {
      color: '#000000',
      fontSize: 20,
      fontWeight: '600',
      fontFamily: 'Comfortaa',
      letterSpacing: -0.24,
    },
    subtitle: {
      color: '#999999',
      fontSize: 14,
      lineHeight: 20,
      width: 199,
      textAlign: 'center',
      marginTop: 10,
      fontFamily: 'Roboto',
      letterSpacing: -0.24,
    },
    innerDiv: {
      backgroundColor: theme.colors.themeColor,
      height: 280,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      borderTopLeftRadius: 29,
      borderTopRightRadius: 29,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    btnDiv: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    btn: {
      width: 140,
      height: 46,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#F0FEFE',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    signupBtn: {
      backgroundColor: '#FFFFFF',
    },
    loginText: {
      color: '#FFFFFF',
    },
  });

export default Welcome;
