import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

// Import screens
import HomeScreen from './screens/HomeScreen';
import CommunicationScreen from './screens/CommunicationScreen';
import MeetingRoomScreen from './screens/MeetingRoomScreen';
import PaymentScreen from './screens/PaymentScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => <Text style={{color, fontSize: 24}}>🏢</Text>,
            title: 'Corporate Hills',
          }}
        />
        <Tab.Screen
          name="Communication"
          component={CommunicationScreen}
          options={{
            tabBarIcon: ({color}) => <Text style={{color, fontSize: 24}}>💬</Text>,
            title: 'Messages',
          }}
        />
        <Tab.Screen
          name="Meetings"
          component={MeetingRoomScreen}
          options={{
            tabBarIcon: ({color}) => <Text style={{color, fontSize: 24}}>📅</Text>,
            title: 'Book Meeting Room',
          }}
        />
        <Tab.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            tabBarIcon: ({color}) => <Text style={{color, fontSize: 24}}>💳</Text>,
            title: 'Rental Payment',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
