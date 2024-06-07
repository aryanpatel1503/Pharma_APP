import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {lazy} from 'react';
import MaterialCommIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';
import Setting from '../Setting';
import {StyleSheet} from 'react-native';
const Landing = lazy(() => import('../Dr_User/Index'));
const Profile3 = lazy(() => import('../Profile/Profile3'));
const Profile2 = lazy(() => import('../Profile/Profile2'));
const UserProfile = lazy(() => import('../Profile/UserProfile'));

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Welcome"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Order') {
            iconName = 'receipt';
          } else if (route.name === 'Profile') {
            iconName = 'account-outline';
            // iconName = focused ? 'account-outline' : 'home-account';
          } else if (route.name === 'Setting') {
            iconName = 'cog-outline';
          }

          return (
            <>
              <MaterialCommIcon name={iconName} size={size} color={color} />
            </>
          );
        },
        tabBarActiveTintColor: theme.colors.themeColor,
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={Landing}
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Order"
        component={Profile3}
        options={{
          headerShown: false,
          title: 'My Orders',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={{
          headerShown: false,
          title: 'Profile',
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          title: 'Setting',
        }}
      />
    </Tab.Navigator>
  );
};

const createStyles = theme => {
  StyleSheet.create({
    container: {
      flex: 1,
    },
  });
};

export default BottomTab;
