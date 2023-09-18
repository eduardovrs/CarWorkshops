import React from 'react';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';
import ReferFriendService from '../../services/ReferFriendService';
import {IReferFriendServiceProps} from '../../services/ReferFriendService.structure';
import {cpfMask, phoneMask, validateEmail} from '../../utils/string';

export default function ReferFriend() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [disable, setDisable] = React.useState<boolean>(true);
  const currentDate = new Date();
  const currentFormatedDate = currentDate.toJSON().slice(0, 10);
  const [body, setBody] = React.useState<IReferFriendServiceProps>({
    Indicacao: {
      CodigoAssociacao: '601',
      DataCriacao: currentFormatedDate,
      CpfAssociado: '',
      EmailAssociado: '',
      NomeAssociado: '',
      TelefoneAssociado: '',
      PlacaVeiculoAssociado: '',
      NomeAmigo: '',
      TelefoneAmigo: '',
      EmailAmigo: '',
    },
    Remetente: '',
    Copias: [],
  });

  const inputNotEmpty = ![body.Indicacao].every(item => item);

  const validEmail = validateEmail(body.Indicacao.EmailAssociado);
  const validFriendsEmail = validateEmail(body.Indicacao.EmailAmigo);

  const verifyInputs = React.useCallback(() => {
    if (!inputNotEmpty && validEmail && validFriendsEmail) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [inputNotEmpty, validEmail, validFriendsEmail]);

  const sendFriendsRefer = async () => {
    setIsLoading(true);
    try {
      const response = await ReferFriendService.sendFriendRefer(body);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    verifyInputs();
  }, [verifyInputs]);

  return (
    <View style={styles.formContainer}>
      <Text style={styles.referFriendText}>Indique um amigo(a)</Text>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userInfoText}>Suas informações</Text>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            placeholder="Digite aqui seu nome"
            placeholderTextColor={'#595959'}
            keyboardType="default"
            value={body.Indicacao.NomeAssociado}
            onChangeText={(text: string) => {
              setBody({
                ...body,
                Indicacao: {
                  ...body.Indicacao,
                  NomeAssociado: text.replace(/[^a-zA-ZÀ-ÿ\s]/g, ''),
                },
              });
            }}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            maxLength={14}
            autoCapitalize="none"
            placeholder="Digite aqui seu CPF"
            placeholderTextColor={'#595959'}
            keyboardType="numeric"
            value={body.Indicacao.CpfAssociado}
            onChangeText={(text: string) => {
              setBody({
                ...body,
                Indicacao: {
                  ...body.Indicacao,
                  CpfAssociado: cpfMask(text),
                },
              });
            }}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            placeholder="Digite aqui seu e-mail"
            placeholderTextColor={'#595959'}
            keyboardType="email-address"
            value={body.Indicacao.EmailAssociado}
            onChangeText={(text: string) => {
              setBody({
                ...body,
                Indicacao: {
                  ...body.Indicacao,
                  EmailAssociado: text,
                },
                Remetente: text,
              });
            }}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            maxLength={15}
            autoCapitalize="none"
            placeholder="Digite aqui seu telefone"
            placeholderTextColor={'#595959'}
            keyboardType="phone-pad"
            value={body.Indicacao.TelefoneAssociado}
            onChangeText={(text: string) => {
              setBody({
                ...body,
                Indicacao: {
                  ...body.Indicacao,
                  TelefoneAssociado: phoneMask(text),
                },
              });
            }}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            placeholder="Digite aqui a placa do seu carro"
            placeholderTextColor={'#595959'}
            keyboardType="default"
            value={body.Indicacao.PlacaVeiculoAssociado}
            onChangeText={(text: string) => {
              setBody({
                ...body,
                Indicacao: {
                  ...body.Indicacao,
                  PlacaVeiculoAssociado: text.replace(/[^\w\s\][^]/gi, ''),
                },
              });
            }}
            style={styles.input}
          />
        </View>
      </View>
      <View style={styles.friendsInfoContainer}>
        <Text style={styles.userInfoText}>Informações do amigo(a)</Text>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            placeholder="Digite aqui o nome do seu amigo(a)"
            placeholderTextColor={'#595959'}
            keyboardType="default"
            value={body.Indicacao.NomeAmigo}
            onChangeText={(text: string) => {
              setBody({
                ...body,
                Indicacao: {
                  ...body.Indicacao,
                  NomeAmigo: text.replace(/[^a-zA-ZÀ-ÿ\s]/g, ''),
                },
              });
            }}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            maxLength={15}
            autoCapitalize="none"
            placeholder="Digite aqui o telefone do seu amigo(a)"
            placeholderTextColor={'#595959'}
            keyboardType="phone-pad"
            value={body.Indicacao.TelefoneAmigo}
            onChangeText={(text: string) => {
              setBody({
                ...body,
                Indicacao: {
                  ...body.Indicacao,
                  TelefoneAmigo: phoneMask(text),
                },
              });
            }}
            style={styles.input}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            placeholder="Digite aqui o e-mail do seu amigo(a)"
            placeholderTextColor={'#595959'}
            keyboardType="email-address"
            value={body.Indicacao.EmailAmigo}
            onChangeText={(text: string) => {
              setBody({
                ...body,
                Indicacao: {
                  ...body.Indicacao,
                  EmailAmigo: text,
                },
              });
            }}
            style={styles.input}
          />
        </View>
      </View>
      <TouchableOpacity
        disabled={disable}
        style={[
          styles.sendReferButton,
          disable && {
            backgroundColor: '#595959',
            borderColor: '#000000',
          },
        ]}
        onPress={() => {
          sendFriendsRefer();
        }}>
        {isLoading ? (
          <ActivityIndicator color="white" size={40} />
        ) : (
          <Text
            style={[styles.sendReferbuttonText, disable && {color: '#A8A8A8'}]}>
            Enviar indicação
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
