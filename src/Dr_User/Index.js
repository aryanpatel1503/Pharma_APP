import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Appbar,
  Card,
  IconButton,
  Searchbar,
  Text,
  useTheme,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const SalesMan = require('../images/SalesMan.png');
const UserAvailable = require('../images/user2.png');

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation(); // Hook for navigation

  const handlePress = () => {
    navigation.navigate('Category'); // Navigate to the Details screen
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.text1}>welcome back</Text>
          <Text style={styles.text2}>Krunal Rethod</Text>
        </View>
        <IconButton icon="bell-outline" size={24} onPress={() => {}} />
        <IconButton icon="cart-outline" size={24} onPress={() => {}} />
      </Appbar.Header>
      <View style={styles.titleContainer1}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>
      <TouchableOpacity
        style={[styles.cardContainer, styles.cardCommonContainer]}
        onPress={handlePress}>
        <Card.Title
          title="Star medica Hub"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          titleStyle={[styles.cardText, styles.cardTitle]}
          subtitleNumberOfLines={null}
          subtitleVariant="bodyMedium"
          subtitleStyle={[styles.cardText, styles.cardSubTitle]}
          left={props => (
            <Image
              source={SalesMan}
              style={{width: 65, height: 65, borderRadius: 20}}
            />
          )}
          leftStyle={styles.leftStyle}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.cardContainer2, styles.cardCommonContainer]}
        onPress={handlePress}>
        <Card.Title
          title="Dr Hub"
          subtitle="Mauris a finibus ante, aliquet tincidunt ipsum"
          titleStyle={[styles.cardText, styles.cardTitle]}
          subtitleNumberOfLines={null}
          subtitleVariant="bodyMedium"
          subtitleStyle={[styles.cardText, styles.cardSubTitle]}
          left={props => (
            <Image
              source={UserAvailable}
              style={{width: 60, height: 60, borderRadius: 20}}
            />
          )}
          leftStyle={styles.leftStyle}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.cardContainer2, styles.cardCommonContainer]}
        onPress={handlePress}>
        <Card.Title
          title="Company"
          subtitle="Mauris a finibus ante, aliquet tincidunt ipsum"
          titleStyle={[styles.cardText, styles.cardTitle]}
          subtitleNumberOfLines={null}
          subtitleVariant="bodyMedium"
          subtitleStyle={[styles.cardText, styles.cardSubTitle]}
          left={props => (
            <Image
              source={UserAvailable}
              style={{width: 60, height: 60, borderRadius: 20}}
            />
          )}
          leftStyle={styles.leftStyle}
        />
      </TouchableOpacity>
      <View style={styles.btncontainer}>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Search Products</Text>
        </TouchableOpacity>
      </View>
      {/* <NewTab /> */}
    </View>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    header: {
      backgroundColor: '#fff',
    },
    text1: {
      color: '#9C9C9C',
      fontFamily: 'Comfortaa',
    },
    text2: {
      color: '#000000',
      fontWeight: '800',
      fontSize: 20,
      fontFamily: 'Comfortaa',
    },
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      padding: 20,
    },
    titleContainer: {
      flex: 1,
      flexDirection: 'column',
      lineHeight: 8,
    },
    titleContainer1: {
      marginTop: 6,
      marginBottom: 6,
    },
    cardCommonContainer: {
      height: 95,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 8,
      borderRadius: 15,
      marginVertical: 6,
    },
    searchBar: {
      backgroundColor: '#F3F6F6',
      borderRadius: 20,
    },
    cardText: {
      paddingHorizontal: 20,
    },
    cardTitle: {
      fontSize: 20,
      fontWeight: '500',
      fontFamily: 'Comfortaa',
    },
    cardSubTitle: {
      fontSize: 13,
      fontWeight: '500',
      fontFamily: 'Comfortaa',
      lineHeight: 18,
      color: '#767575',
    },
    cardContainer: {
      backgroundColor: '#E9F4F4',
    },
    cardContainer2: {
      backgroundColor: '#F8F8F8',
    },
    btncontainer: {
      marginTop: 36,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#00c4cc',
      paddingVertical: 13,
      paddingHorizontal: 40,
      borderRadius: 30,
      width: '80%',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '700',
      fontFamily: 'Comfortaa',
      textAlign: 'center',
    },
    leftStyle: {
      paddingRight: 50,
    },
  });

export default Landing;
