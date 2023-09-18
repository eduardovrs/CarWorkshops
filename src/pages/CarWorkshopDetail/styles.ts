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
  content: {
    height: '30%',
  },
  workshopsDetailsText: {
    fontSize: 21,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  workshopsDetailsErrorText: {
    fontSize: 21,
    fontWeight: '700',
    color: '#FFFFFF',
    alignSelf: 'center',
    paddingHorizontal: 8,
    marginTop: '20%',
  },
  workshopLogoContainer: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  workshopLogoStyle: {
    width: '100%',
    height: '100%',
  },
  workshopDetailsContainer: {
    height: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    gap: 8,
    padding: 8,
  },
  workshopDetail: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16,
  },
  workshopDetailsText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});
