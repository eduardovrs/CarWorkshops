import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  referFriendText: {
    fontSize: 21,
    fontWeight: '700',
    paddingLeft: 15,
    color: '#FFFFFF',
    marginTop: '20%',
  },
  userInfoContainer: {
    gap: 8,
    marginBottom: 15,
  },
  friendsInfoContainer: {
    gap: 8,
    marginBottom: 20,
  },
  userInfoText: {
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 15,
    color: '#FFFFFF',
    margin: 8,
  },
  inputContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 14,
    borderRadius: 8,
    borderWidth: 1,
    height: 48,
    paddingLeft: 15,
    paddingRight: 15,
    width: '90%',
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    color: '#595959',
  },
  sendReferButton: {
    height: '8%',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  sendReferbuttonText: {
    fontSize: 21,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
