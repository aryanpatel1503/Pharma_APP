import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../login/Login';
import SignUp from '../login/SignUp';
import Verification from '../login/Verification';
import Profile from '../Profile';
import Profile2 from '../Profile/Profile2';
import Profile3 from '../Profile/Profile3';
import Welcome from '../login';

const AuthScreen = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Verification"
        component={Verification}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Profile1"
        component={Profile}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Profile2"
        component={Profile2}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Profile3"
        component={Profile3}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthScreen;
