import React from 'react';
import {styles} from './styles';
import {View, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../../assets/CarWorkshops.png')}
      />
    </View>
  );
}
