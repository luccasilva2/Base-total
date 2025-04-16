import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, StyleSheet, Dimensions } from 'react-native';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';

const Tab = createMaterialTopTabNavigator();

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: styles.tabLabel,
          tabBarIndicatorStyle: styles.tabIndicator,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ tabBarLabel: 'Entrar' }}
        />
        <Tab.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ tabBarLabel: 'Cadastrar' }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabBar: {
    backgroundColor: '#6200ee',
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 20,
    elevation: 0,
    shadowOpacity: 0,
  },
  tabLabel: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 16,
  },
  tabIndicator: {
    backgroundColor: 'white',
    height: 4,
    borderRadius: 2,
  },
});