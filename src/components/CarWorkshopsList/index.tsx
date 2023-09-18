import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import GetCarWorkshopsService from '../../services/GetCarWorkshopsService';
import {ICarWorkshopsList} from './CarWorkshopsList.structure';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export default function CarWorkshopsList() {
  const navigation = useNavigation();
  const [carWorkshops, setCarWorkshops] = React.useState(
    {} as ICarWorkshopsList,
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const getCarWorkshops = async () => {
    setIsLoading(true);
    try {
      const response = await GetCarWorkshopsService.getExistingCarWorkshops();
      setCarWorkshops(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    getCarWorkshops();
  }, []);

  return (
    <>
      {isLoading ? (
        <ActivityIndicator color="white" size={40} />
      ) : (
        carWorkshops.ListaOficinas?.map(item => {
          return (
            <TouchableOpacity
              key={item.Id}
              style={styles.container}
              onPress={() =>
                navigation.navigate('CarWorkshopDetail', {data: item})
              }>
              <View style={styles.iconContainer}>
                <Icon name="car-cog" size={40} color={'#000000'} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.workshopTextName}>{item.Nome}</Text>
                <Text numberOfLines={3} style={styles.workshopTextDescription}>
                  {item.DescricaoCurta}
                </Text>
              </View>
              <View style={styles.fowardIconContainer}>
                <Icon name="chevron-right" size={40} color={'#000000'} />
              </View>
            </TouchableOpacity>
          );
        })
      )}
    </>
  );
}
