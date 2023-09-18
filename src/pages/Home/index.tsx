import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import CarWorkshopsList from '../../components/CarWorkshopsList';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <Text style={styles.registeredWorkshopsText}>Oficinas cadastradas</Text>
      <ScrollView
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.carWorkshopsContainer}>
        <CarWorkshopsList />
        <TouchableOpacity
          style={styles.referFriendButton}
          onPress={() => navigation.navigate('ReferFriend')}>
          <Text style={styles.referFriendButtonText}>Indicar amigos</Text>
          <Icon name="account-plus" size={26} color={'#FFFFFF'} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
