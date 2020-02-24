import { StyleSheet, Platform, StatusBar } from 'react-native';

import { colors } from '../../config/colors/nba';

export default StyleSheet.create({
  closeButton: { color: colors.white.primary },
  title: { color: colors.white.primary, fontWeight: 'bold' },
  header: { backgroundColor: colors.black.primary },
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.black.primary,
    flexDirection: 'row',
    height: 50
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  safeAreaView: {
    backgroundColor: colors.black.primary
  }
});
