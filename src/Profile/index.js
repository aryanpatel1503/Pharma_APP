import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Icon, TextInput, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppBar from '../components/AppBar';
const logoImg = require('../images/Profile.png');

const Profile = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    degree: '',
    licenceNumber: '',
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
        <Text style={styles.step}>Step 1 to 3</Text>
        <Text style={styles.welcome}>Your Profile</Text>
        <Text style={[styles.signUpDetailText, styles.subtitleText]}>
          Update your profile to get the product details from seller.
        </Text>

        <View style={styles.imgDiv}>
          <Image source={logoImg} style={styles.profileImg} />
        </View>

        <TextInput
          mode="outlined"
          value={formValues.fname}
          onChangeText={value => handleChange('fname', value)}
          placeholder="First Name"
          style={styles.emailTextBox}
          outlineColor="transparent"
          outlineStyle={styles.outlineTextBox}
          textColor="#818181"
          placeholderTextColor="#818181"
        />

        <TextInput
          mode="outlined"
          value={formValues.lname}
          onChangeText={value => handleChange('lname', value)}
          placeholder="Last Name"
          style={styles.emailTextBox}
          outlineColor="transparent"
          outlineStyle={styles.outlineTextBox}
          textColor="#818181"
          placeholderTextColor="#818181"
        />

        <TextInput
          mode="outlined"
          value={formValues.degree}
          onChangeText={value => handleChange('degree', value)}
          placeholder="Dr's Degree"
          style={styles.emailTextBox}
          outlineColor="transparent"
          outlineStyle={styles.outlineTextBox}
          textColor="#818181"
          placeholderTextColor="#818181"
        />

        <TextInput
          mode="outlined"
          value={formValues.licenceNumber}
          onChangeText={value => handleChange('licenceNumber', value)}
          placeholder="Licence Number"
          style={styles.emailTextBox}
          outlineColor="transparent"
          outlineStyle={styles.outlineTextBox}
          textColor="#818181"
          placeholderTextColor="#818181"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('Profile2')}
          style={styles.LoginBtn}
          activeOpacity={0.8}>
          <Text style={{color: '#FFFFFF'}}>Continue</Text>
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
      display: 'flex',
      position: 'relative',
      flex: 1,
      paddingHorizontal: 32,
      backgroundColor: '#fbfbfb',
    },
    step: {
      marginTop: 10,
      color: '#454545',
      fontSize: 12,
      fontWeight: '600',
      letterSpacing: -0.24,
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
    outlineTextBox: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#B9B9B9',
    },
    emailTextBox: {
      paddingHorizontal: 6,
      marginBottom: 15,
    },
    imgDiv: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 28,
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
      marginTop: 29,
      width: 283,
      textAlign: 'center',
      lineHeight: 19.5,
    },
    subtitleText: {
      marginTop: 10,
      marginBottom: 28,
    },
  });

export default Profile;
