import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Parent from '../components/Parent';
import Landing from '../Dr_User/Index';
import UserProfile from '../Profile/UserProfile';
import Category from '../Dr_User/Category';
import SearchProduct from '../Dr_User/SearchProduct';
import MultipleProduct from '../Dr_User/MultipleProduct';
import ProductCategory from '../Dr_User/ProductCategory';
import ProductDetails from '../Dr_User/ProductDetails';
import Myorder from '../Dr_User/Myorder';

const MainScreen = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <MainStack.Navigator initialRouteName="Tab">
      <MainStack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Tab"
        component={Parent}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Profile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="SearchProduct"
        component={SearchProduct}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="MultipleProduct"
        component={MultipleProduct}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="ProductCategory"
        component={ProductCategory}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name="Myorder"
        component={Myorder}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

export default MainScreen;
