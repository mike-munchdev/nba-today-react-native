import { StyleSheet } from 'react-native';
import { colors } from '../../config/colors/nba';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grey.light
  },
  calendarPickerView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  headerDateTouchable: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  headerDateText: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14
  },
  noGamesView: {
    marginTop: 60,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  noGamesText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.grey.opaque
  },
  loadingView: {
    marginTop: -350,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollView: { marginTop: 5, flex: 1 },
  safeAreaView: { alignItems: 'flex-start' }
});
