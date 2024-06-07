import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Icon, TextInput, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';

const Verification = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [formValues, setFormValues] = useState({
    textBox1: '',
    textBox2: '',
    textBox3: '',
    textBox4: '',
    textBox5: '',
  });

  const handleChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <AppBar
        navigation={navigation}
        backBordered={true}
        actionButton={false}
      />

      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>Verification</Text>
        <Text style={[styles.signUpDetailText, styles.subtitleText]}>
          Please check you message for a five-digit security code and enter it
          below.
        </Text>

        <View style={styles.textBoxDiv}>
          <TextInput
            mode="outlined"
            value={formValues.textBox1}
            onChangeText={value => handleChange('textBox1', value)}
            placeholder=""
            style={styles.emailTextBox}
            outlineColor="transparent"
            outlineStyle={styles.outlineTextBox}
            textColor="#818181"
            placeholderTextColor="#818181"
            maxLength={1}
            underlineColor="transparent"
            activeUnderlineColor="transparent"
          />

          <TextInput
            mode="outlined"
            value={formValues.textBox2}
            onChangeText={value => handleChange('textBox2', value)}
            placeholder=""
            style={styles.emailTextBox}
            outlineColor="transparent"
            outlineStyle={styles.outlineTextBox}
            textColor="#818181"
            placeholderTextColor="#818181"
            maxLength={1}
          />

          <TextInput
            mode="outlined"
            value={formValues.textBox3}
            onChangeText={value => handleChange('textBox3', value)}
            placeholder=""
            style={styles.emailTextBox}
            outlineColor="transparent"
            outlineStyle={styles.outlineTextBox}
            textColor="#818181"
            placeholderTextColor="#818181"
            maxLength={1}
            secureTextEntry={false}
          />
          <TextInput
            mode="outlined"
            value={formValues.textBox4}
            onChangeText={value => handleChange('textBox4', value)}
            placeholder=""
            style={styles.emailTextBox}
            outlineColor="transparent"
            outlineStyle={styles.outlineTextBox}
            textColor="#818181"
            placeholderTextColor="#818181"
            maxLength={1}
            secureTextEntry={false}
          />
          <TextInput
            mode="outlined"
            value={formValues.textBox5}
            onChangeText={value => handleChange('textBox5', value)}
            placeholder=""
            style={styles.emailTextBox}
            outlineColor="transparent"
            outlineStyle={styles.outlineTextBox}
            textColor="#818181"
            placeholderTextColor="#818181"
            maxLength={1}
            secureTextEntry={false}
          />
        </View>

        <Text style={[styles.signUpDetailText, styles.termInfo]}>
          Didn't get a code? {''}
          <Text style={[styles.signUpText]}>Send again</Text>
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Profile1')}
          style={styles.LoginBtn}
          activeOpacity={0.8}>
          <Text style={{color: '#FFFFFF'}}>Verify</Text>
          <Icon source="arrow-right" color="white" size={18} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingHorizontal: 32,
      backgroundColor: '#fbfbfb',
    },
    welcome: {
      color: '#000000',
      fontWeight: '600',
      fontSize: 16,
      marginTop: 10,
      //   marginBottom: 12,
      fontFamily: 'Comfortaa',
      letterSpacing: -0.24,
    },
    textBoxDiv: {
      display: 'flex',
      flexDirection: 'row',
      columnGap: 7,
    },
    outlineTextBox: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B9B9B9',
    },
    emailTextBox: {
      width: 45,
      marginBottom: 15,
      fontSize: 24,
      fontFamily: 'Roboto Condensed',
    },
    LoginBtn: {
      backgroundColor: '#0EC5C1',
      // backgroundColor: 'linear-gradient(90deg, #0EC5C1 18%, #24E2DE 100%)',
      width: '100%',
      borderColor: 'transparent',
      paddingVertical: 16,
      borderRadius: 10,
      fontFamily: 'Comfortaa',
      fontSize: 14,
      fontWeight: 700,
      marginTop: 12,
      marginBottom: 24,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    signUpDetailText: {
      fontFamily: 'Poppins',
      fontSize: 13,
      lineHeight: 19.5,
      color: '#999999',
    },
    signUpText: {
      color: theme.colors.themeColor,
    },
    termInfo: {
      marginVertical: 25,
      width: 283,
      textAlign: 'center',
      lineHeight: 19.5,
    },
    subtitleText: {
      marginTop: 10,
      marginBottom: 28,
    },
  });

export default Verification;
