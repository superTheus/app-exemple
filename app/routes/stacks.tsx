import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/home/home';
import { StackParamList } from './types';
import Welcome from '../views/welcome/welcome';

const StackNavigator = createNativeStackNavigator<StackParamList>();

export default function Stacks() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="Home" component={Home} options={
          {
            headerShown: false,
          }
        } />
        <StackNavigator.Screen name="Welcome" component={Welcome} options={
          {
            headerShown: false,
          }
        } />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}