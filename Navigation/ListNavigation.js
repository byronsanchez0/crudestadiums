import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import List from '../Views/List';
import Details from '../Views/Details';

  export default function ListNavigation() {

    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{
      
    }}>
        <Stack.Screen name='List 2' component={List} />
        <Stack.Screen name='Details' component={Details}/>
      </Stack.Navigator>
    );
  }

  const styles = StyleSheet.create({
  
  
  });