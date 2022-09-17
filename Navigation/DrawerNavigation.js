import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ListNavigation from './ListNavigation';
import FilterNavigation from './FilterNavigation';
import Add from '../Views/Add';

export default function DrawerNavigation() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator>
        <Drawer.Screen name='List' component={ListNavigation}/>
        <Drawer.Screen name='Add' component={Add}/>
        <Drawer.Screen name='Filter' component={FilterNavigation}/>
      </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
