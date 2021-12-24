import React from 'react'
import { Colors } from '../components/styles'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from '../screens/logIn';
import Stock from '../screens/stock';
import StockAdmin from '../screens/stockAdmin';
import Transfer from '../screens/Transfer';


const Stack = createNativeStackNavigator();
const {tertiary, primary} = Colors;

const RootStack = () => {
    return(
        <NavigationContainer
            screenOptions = {{
                headerStyle: { 
                    backgroundColor: 'transparent'
                },
                headerTintColor: tertiary,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                }
            }}
            initialRouteName="LogIn"

        >
            <Stack.Navigator>
                <Stack.Screen name = "LogIn" component = {LogIn}/>
                <Stack.Screen name = "Stock" component = {Stock}/>
                <Stack.Screen name = "StockAdmin" component = {StockAdmin}/>
                <Stack.Screen name = "Transfer" component = {Transfer}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;