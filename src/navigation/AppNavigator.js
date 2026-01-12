import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Grid, MessageSquare, User } from 'lucide-react-native';

import { Colors } from '../theme';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { RoomsScreen } from '../screens/Rooms/RoomsScreen';
import { ChatListScreen } from '../screens/Chat/ChatListScreen';
import { ProfileScreen } from '../screens/Profile/ProfileScreen';
import { DecisionRoomScreen } from '../screens/DecisionRoomScreen';
import { SearchScreen } from '../screens/Search/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.secondary,
            tabBarInactiveTintColor: Colors.textMuted,
            tabBarStyle: {
                backgroundColor: Colors.white,
                borderTopWidth: 1,
                borderTopColor: Colors.border,
                height: 60,
                paddingBottom: 10,
                paddingTop: 10,
            },
        }}
    >
        <Tab.Screen
            name="TabHome"
            component={HomeScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => <Home size={24} color={color} />
            }}
        />
        <Tab.Screen
            name="TabRooms"
            component={RoomsScreen}
            options={{
                tabBarLabel: 'Rooms',
                tabBarIcon: ({ color }) => <Grid size={24} color={color} />
            }}
        />
        <Tab.Screen
            name="TabChat"
            component={ChatListScreen}
            options={{
                tabBarLabel: 'Chat',
                tabBarIcon: ({ color }) => <MessageSquare size={24} color={color} />
            }}
        />
        <Tab.Screen
            name="TabProfile"
            component={ProfileScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => <User size={24} color={color} />
            }}
        />
    </Tab.Navigator>
);

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Onboarding"
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_right',
                }}
            >
                <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                <Stack.Screen name="Main" component={MainTabs} />
                <Stack.Screen name="DecisionRoom" component={DecisionRoomScreen} />
                <Stack.Screen name="Search" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
