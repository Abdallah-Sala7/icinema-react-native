import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Interests, NewUser, RegisterScreen, SplashScreen, Verification } from '../screens';

const Stack = createNativeStackNavigator();

const LoginNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="splash" component={SplashScreen} />

      <Stack.Screen name="register" component={RegisterScreen} />

      <Stack.Screen name="new user" component={NewUser} />

      <Stack.Screen name="verification" component={Verification} />

      <Stack.Screen name="interests" component={Interests} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;

const styles = StyleSheet.create({});
