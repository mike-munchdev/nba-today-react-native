import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: { flex: 1 },
  card: { flexDirection: 'row' },
  teamLinesView: { flex: 5, flexDirection: 'column' },
  gameInfoView: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sectionTitleText: {
    marginLeft: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black'
  }
});
