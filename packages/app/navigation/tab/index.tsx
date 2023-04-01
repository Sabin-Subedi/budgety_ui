import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BarChart, Home, Siren, User, Wallet } from '@tamagui/lucide-icons'
import StatScreen from 'app/features/stats/stats-screen'
import UserScreen from 'app/features/user/user-screen'
import React from 'react'
import { SafeAreaView } from 'react-native'
import HomeScreen from '../../../../apps/next/pages'

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
      <SafeAreaView>
        <Component {...props} />
      </SafeAreaView>
    )
  }
}

function TabNavigation() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const tabItem = tabScreens.find((item) => item.name === route.name)
          const Icon = tabItem?.icon
          // You can return any component that you like here!
          return Icon ? <Icon color={color} size={size} /> : <Siren color="$red10" />
        },
        tabBarActiveTintColor: '$base100',
        tabBarInactiveTintColor: '$base60',
        tabBarLabel: (props) => {
          return null
        },
        tabBarStyle: {
          maxHeight: 80,
        },
        tabBarItemStyle: {
          paddingBottom: 10,
          paddingTop: 10,
        },
        headerShown: false,
      })}
    >
      {tabScreens.map((item, index) => {
        return <Tabs.Screen name={item.name} component={WithSafeArea(item.component)} />
      })}
    </Tabs.Navigator>
  )
}

export default TabNavigation
