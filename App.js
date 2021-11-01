import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeBaseProvider } from 'native-base';
import React from 'react'
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Start from './src/screens/Start';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Start" component={Start}/>  
          <Stack.Screen name="SignIn" component={SignIn}/>  
          <Stack.Screen name="SignUp" component={SignUp}/>  
        </Stack.Navigator>     
      </NativeBaseProvider> 
    </NavigationContainer>
  )
}

export default App
