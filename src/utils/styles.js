import { StyleSheet } from 'react-native';
import { colors } from '../config/colors/nba';

export default StyleSheet.create({
  infoText: {
    fontSize: 12,
    textAlign: 'center'
  },
  recordText: { fontSize: 12, color: colors.grey.primary },
  teamLineView: { flexDirection: 'row', flex: 1 },
  teamLogoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  teamLogoImage: { width: 20, height: 20, marginRight: 5 },
  teamNicknameView: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  teamNicknameText: { marginRight: 2, marginLeft: 5 },
  scoreView: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  gameWinnerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
