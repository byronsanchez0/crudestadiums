import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import FilterList from '../Views/FilterList';
import FilterResult from '../Views/FilterResult'

export default function FilterNavigation() {

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name='Filter 2' component={FilterList} />
      <Stack.Screen name='Result' component={FilterResult}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
 
 
});