import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Checkbox, TextInput, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
const logoImg = require('../images/Logo.png');
const googleImg = require('../images/Google.png');
const fbImg = require('../images/Facebook.png');

const Login = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [checked, setChecked] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewDiv}>
        <Image source={logoImg} style={styles.logo} />
        <Text style={styles.welcome}>Welcome back!</Text>
        <TextInput
          mode="outlined"
          value={formValues.email}
          onChangeText={value => handleChange('email', value)}
          placeholder="Email"
          style={styles.emailTextBox}
          outlineColor="transparent"
          outlineStyle={styles.outlineTextBox}
          textColor="#818181"
          placeholderTextColor="#818181"
        />

        <TextInput
          mode="outlined"
          value={formValues.password}
          onChangeText={value => handleChange('password', value)}
          placeholder="Password"
          style={styles.emailTextBox}
          outlineColor="transparent"
          outlineStyle={styles.outlineTextBox}
          textColor="#818181"
          placeholderTextColor="#818181"
          secureTextEntry={secureTextEntry}
          right={
            <TextInput.Icon
              icon={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
              onPress={toggleSecureTextEntry}
            />
          }
        />

        <View style={styles.innerDiv}>
          <View style={styles.rpDiv}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              uncheckedColor="#D7D7D7"
              color="#D7D7D7"
            />
            <Text style={styles.rpText}>Remember password</Text>
          </View>
          <Text style={styles.fpText}>Forgot password?</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.replace('Main')}
          style={styles.LoginBtn}
          activeOpacity={0.8}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.orDiv}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.googleFbDiv}>
          <TouchableOpacity
            onPress={() => null}
            style={[styles.googleFbBtn]}
            activeOpacity={0.8}>
            <Image source={googleImg} style={styles.googleFbImg} />
            <Text style={styles.googleFbLabel}>With Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => null}
            style={[styles.googleFbBtn]}
            activeOpacity={0.8}>
            <Image source={fbImg} style={styles.googleFbImg} />
            <Text style={styles.googleFbLabel}>With Facebook</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.signUpDetailText}>
          Don't have an account{' '}
          <Text
            style={styles.signUpText}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fbfbfb',
    },
    scrollViewDiv: {
      paddingHorizontal: 32,
      alignItems: 'center',
    },
    logo: {
      marginTop: 88,
      marginBottom: 8,
    },
    welcome: {
      color: '#000000',
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'Comfortaa',
      letterSpacing: -0.24,
      marginBottom: 38,
    },
    outlineTextBox: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B9B9B9',
    },
    emailTextBox: {
      width: 316,
      paddingHorizontal: 6,
      marginBottom: 15,
    },
    innerDiv: {
      // width: '100%',
      // flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    rpDiv: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    rpText: {
      color: '#736D6D',
      fontSize: 12,
      fontFamily: 'Poppins',
    },
    fpText: {
      color: '#999999',
      fontFamily: 'Poppins',
      fontSize: 13,
    },
    LoginBtn: {
      backgroundColor: '#0EC5C1',
      // backgroundColor: 'linear-gradient(90deg, #0EC5C1 18%, #24E2DE 100%)',
      width: '100%',
      borderColor: 'transparent',
      paddingVertical: 16,
      borderRadius: 10,
      marginTop: 12,
    },
    loginText: {
      textAlign: 'center',
      fontFamily: 'Comfortaa',
      fontSize: 14,
      fontWeight: '600',
      color: '#FFFFFF',
    },
    orDiv: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    line: {
      flex: 1,
      height: 1,
      backgroundColor: '#ccc',
    },
    orText: {
      marginHorizontal: 10,
      fontSize: 13,
      color: '#888',
    },
    googleFbDiv: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    googleFbBtn: {
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#e6e6e6',
      backgroundColor: '#e9ebeb',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 9,
      paddingVertical: 7,
    },
    googleFbLabel: {
      fontFamily: 'IBM Plex Sans',
      fontSize: 14,
      fontWeight: '300',
      paddingLeft: 10,
      color: '#000000',
    },
    googleFbImg: {
      width: 24,
      height: 24,
    },
    signUpDetailText: {
      marginTop: 29,
      fontFamily: 'Poppins',
      fontSize: 13,
      color: '#999999',
      marginBottom: 24,
    },
    signUpText: {
      color: theme.colors.themeColor,
    },
  });

export default Login;
