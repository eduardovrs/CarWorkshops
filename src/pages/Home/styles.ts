import {Platform, StatusBar, StyleSheet} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : '15%',
  },
  headerContainer: {
    height: '20%',
  },
  contentContainerStyle: {
    height: '100%',
    alignItems: 'center',
    gap: 16,
    flexGrow: 1,
  },
  carWorkshopsContainer: {
    width: '95%',
    alignSelf: 'center',
  },
  registeredWorkshopsText: {
    fontSize: 21,
    fontWeight: '700',
    paddingLeft: 15,
    color: '#FFFFFF',
    marginBottom: 25,
  },
  referFriendButton: {
    height: '10%',
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginTop: 15,
  },
  referFriendButtonText: {
    fontSize: 21,
    fontWeight: '700',
    color: '#FFFFFF',
    marginRight: 15,
  },
});
