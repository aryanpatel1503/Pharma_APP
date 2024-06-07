import React from 'react';
import MultipleProduct from './MultipleProduct';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

const Header = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={MultipleProduct}
                    options={{ title: 'Gynologist Medicine' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Header;