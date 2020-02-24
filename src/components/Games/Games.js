import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

import GamesList from './GamesList';

import styles from './styles';

const Games = ({ games }) => {
  if (!games) return null;

  const upcomingGames = games.filter(g => g.statusNum === 1);
  const liveGames = games.filter(g => g.statusNum === 2);
  const finishedGames = games.filter(g => g.statusNum === 3);

  return (
    <View style={styles.container}>
      {liveGames && liveGames.length > 0 ? (
        <GamesList title="Live" games={liveGames} />
      ) : null}
      {upcomingGames && upcomingGames.length > 0 ? (
        <GamesList title="Upcoming" games={upcomingGames} />
      ) : null}
      {finishedGames && finishedGames.length > 0 ? (
        <GamesList title="Finished" games={finishedGames} />
      ) : null}
    </View>
  );
};
export default Games;

Games.propTypes = {
  games: PropTypes.array
};
