import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '20%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 5,
    flexDirection: 'row',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  textContainer: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  workshopTextName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: '#000000',
  },
  workshopTextDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  fowardIconContainer: {
    height: '100%',
    justifyContent: 'center',
  },
});
