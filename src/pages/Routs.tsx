/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import CarWorkshopDetail from './CarWorkshopDetail';
import ReferFriend from './ReferFriend';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#000000',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused}) => {
            if (focused) {
              return <Icon name="home" size={size} color={'#FFFFFF'} />;
            }
            return <Icon name="home-outline" size={size} color={'#837e7e'} />;
          },
        }}
      />
      <Tab.Screen
        name="CarWorkshopDetail"
        component={CarWorkshopDetail}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused}) => {
            if (focused) {
              return <Icon name="car-cog" size={size} color={'#FFFFFF'} />;
            }
            return <Icon name="car-cog" size={size} color={'#837e7e'} />;
          },
        }}
      />
      <Tab.Screen
        name="ReferFriend"
        component={ReferFriend}
        options={{
          headerShown: false,
          tabBarIcon: ({size, focused}) => {
            if (focused) {
              return <Icon name="account-plus" size={size} color={'#FFFFFF'} />;
            }
            return (
              <Icon name="account-plus-outline" size={size} color={'#837e7e'} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
