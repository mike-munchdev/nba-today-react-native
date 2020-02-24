import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles';
import GameItem from './GameItem';

const GamesList = ({ games, title }) => {
  return (
    <>
      <Text style={styles.sectionTitleText}>{title}</Text>
      {games.map(g => (
        <GameItem game={g} onPress={() => this.handlePress(g)} key={g.gameId} />
      ))}
    </>
  );
};

export default GamesList;

GamesList.propTypes = {
  games: PropTypes.array,

  title: PropTypes.string
};
