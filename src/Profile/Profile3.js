import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Checkbox, Chip, Searchbar, useTheme} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppBar from '../components/AppBar';
const logoImg = require('../images/Profile.png');

const categoryData = [
  {
    label: 'Gynecologist',
  },
  {
    label: 'Pediatric',
  },
  {
    label: 'Cardiologist',
  },
  {
    label: 'Neurologist',
  },
  {
    label: 'Psychiatrist',
  },
  {
    label: 'Endocrinologist',
  },
  {
    label: 'Dermatologist',
  },
  {
    label: 'Dentist',
  },
];

const Profile3 = ({navigation}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [checkedItems, setCheckedItems] = useState(
    categoryData.reduce((acc, item) => {
      acc[item.label] = false;
      return acc;
    }, {}),
  );
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleChange = item => {
    setCheckedItems(prevState => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const handleClose = (key, value) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [key]: false,
    }));
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <AppBar
          navigation={navigation}
          backBordered={true}
          actionButton={false}
        />
        <ScrollView style={styles.container}>
          <Text style={styles.step}>Step 3 to 3</Text>
          <Text style={styles.welcome}>Add Department of Doctor</Text>
          <Text style={[styles.signUpDetailText, styles.subtitleText]}>
            Update your profile to get the product details from seller.
          </Text>

          <Searchbar
            placeholder="Search Catagory"
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchbar}
          />

          <View style={styles.chipDiv}>
            {Object.entries(checkedItems).map(([key, value], index) => {
              if (value)
                return (
                  <Chip
                    onClose={() => handleClose(key, value)}
                    closeIcon={() => (
                      <MaterialCommIcon
                        name="close"
                        size={20}
                        color="#ffffff"
                      />
                    )}
                    compact={true}
                    key={index}
                    style={styles.chip}
                    textStyle={styles.chipText}>
                    {key}
                  </Chip>
                );
            })}
          </View>

          {categoryData?.map((item, index) => {
            return (
              <Checkbox.Item
                label={item.label}
                status={checkedItems[item.label] ? 'checked' : 'unchecked'}
                onPress={() => handleChange(item.label)}
                uncheckedColor="#D7D7D7"
                color="#D7D7D7"
                labelStyle={{fontFamily: 'Comfortaa', letterSpacing: -0.24}}
                key={index}
              />
            );
          })}

          <TouchableOpacity
            onPress={() => navigation.replace('Main')}
            style={styles.LoginBtn}
            activeOpacity={0.8}>
            <Text style={{color: '#FFFFFF'}}>Done</Text>
          </TouchableOpacity>
        </ScrollView>
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
      paddingHorizontal: 20,
      flex: 1,
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
      fontFamily: 'Comfortaa',
      letterSpacing: -0.24,
    },
    searchbar: {
      backgroundColor: '#F3F6F6',
    },
    chipDiv: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 16,
      marginBottom: 24,
      // overflow: 'auto',
    },
    chip: {
      marginRight: 7,
      marginBottom: 7,
      backgroundColor: '#2BB1FD',
    },
    chipText: {
      color: '#ffffff',
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
    subtitleText: {
      marginTop: 10,
      marginBottom: 28,
    },
  });

export default Profile3;
