import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BarChart, Home, Siren, User, Wallet } from '@tamagui/lucide-icons'
import StatScreen from 'app/features/stats/stats-screen'
import UserScreen from 'app/features/user/user-screen'
import React from 'react'
import Constants from 'expo-constants'
import { SafeAreaView, View, Platform } from 'react-native'
import HomeScreen from '../../../../apps/next/pages'
import { YStack } from '@my/ui'

const tabScreens = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: Home,
  },
  {
    name: 'Wallet',
    component: HomeScreen,
    icon: Wallet,
  },
  {
    name: 'Stats',
    component: StatScreen,
    icon: BarChart,
  },
  {
    name: 'User',
    component: UserScreen,
    icon: User,
  },
]

const Tabs = createBottomTabNavigator()

const WithSafeArea = (Component: any) => {
  return function WithSafeView(props) {
    return (
      <>
        <SafeAreaView
          style={{
            marginTop: Constants.statusBarHeight,
            height: '100%',
          }}
        >
          <Component {...props} />
        </SafeAreaView>
      </>
    )
  }
}

function TabNavigation() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '$base100',
        tabBarInactiveTintColor: '$base60',
        tabBarLabel: (props) => {
          return null
        },
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 84,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: 'hidden',
          position: 'absolute',
          bottom: 0,
        },

        tabBarItemStyle: {
          paddingBottom: 10,
          paddingTop: 10,
        },
        headerShown: false,
      })}
    >
      {tabScreens.map((tab, index) => {
        return (
          <Tabs.Screen
            key={`tab__screen__${index}`}
            name={tab.name}
            component={WithSafeArea(tab.component)}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                const Icon = tab?.icon
                // You can return any component that you like here!
                return Icon ? <Icon color={color} size={size} /> : <Siren color="$red10" />
              },
            }}
          />
        )
      })}
    </Tabs.Navigator>
  )
}

export default TabNavigation
