import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { TeamLine, GameInfo } from '../../utils/games';
import { Card } from '../Card';

import styles from './styles';

const GameItem = ({ game, onPress }) => {
  return (
    <Card style={styles.card}>
      <View style={styles.teamLinesView}>
        <TeamLine game={game} team={game.vTeam} />
        <TeamLine game={game} team={game.hTeam} />
      </View>
      <View style={styles.gameInfoView}>
        <GameInfo game={game} />
      </View>
    </Card>
  );
};

GameItem.propTypes = {
  game: PropTypes.object,

  onPress: PropTypes.func
};

export default GameItem;
