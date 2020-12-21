import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PostsScreen from './screens/PostsScreen';
import PostScreen from './screens/PostScreen';
import HomeScreen from './screens/HomeScreen';
import CodeGuidesScreen from './screens/CodeGuidesScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Blog Posts" component={PostsScreen} />
        <Stack.Screen name="Code Guides" component={CodeGuidesScreen} />
        <Stack.Screen name="Blog Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
