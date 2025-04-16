import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from '../navigation/AuthStack';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import HomeScreen from '../screens/Main/HomeScreen'
import ProfileScreen from '../screens/Main/ProfileScreen'
import SetttingsScreen from '../screens/Main/SettingsScreen'

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
      <LoginScreen />
      <RegisterScreen />
      <HomeScreen />
      <ProfileScreen />
      <SetttingsScreen />
    </NavigationContainer>
  );
}