import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LocationIcon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import {useRoute} from '@react-navigation/native';
import {IWorkshopProps} from './CarWorkshopDetail.structure';
import {styles} from './styles';

export default function CarWorkshopDetail() {
  const route = useRoute();
  const workshopData = route.params as IWorkshopProps;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.content}>
        <Text style={styles.workshopsDetailsText}>Informações da oficina</Text>
        {workshopData === undefined ? (
          <Text style={styles.workshopsDetailsErrorText}>
            Para ver mais informações clique em uma das oficinas cadastradas.
          </Text>
        ) : (
          <>
            <View style={styles.workshopLogoContainer}>
              <Image
                style={styles.workshopLogoStyle}
                source={{
                  uri: `data:image/png;base64,${workshopData?.data.Foto}`,
                }}
              />
            </View>
            <View style={styles.workshopDetailsContainer}>
              <View style={styles.workshopDetail}>
                <Icon name="car-cog" size={26} color={'#000000'} />
                <Text style={styles.workshopDetailsText}>
                  {workshopData.data.Nome}
                </Text>
              </View>
              <View style={styles.workshopDetail}>
                <Icon name="note-text" size={26} color={'#000000'} />
                <Text style={styles.workshopDetailsText}>
                  {workshopData.data.DescricaoCurta}
                </Text>
              </View>
              <View style={styles.workshopDetail}>
                <LocationIcon name="location-pin" size={26} color={'#000000'} />
                <Text style={styles.workshopDetailsText}>
                  {workshopData.data.Endereco}
                </Text>
              </View>
              <View style={styles.workshopDetail}>
                <Icon name="email" size={26} color={'#000000'} />
                <Text style={styles.workshopDetailsText}>
                  {workshopData.data.Email}
                </Text>
              </View>
              {workshopData.data.Telefone1 && (
                <View style={styles.workshopDetail}>
                  <Icon name="cellphone" size={26} color={'#000000'} />
                  <Text style={styles.workshopDetailsText}>
                    {workshopData.data.Telefone1}
                  </Text>
                </View>
              )}
            </View>
          </>
        )}
      </View>
    </View>
  );
}
