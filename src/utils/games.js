import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import teams from './teams';
import moment from 'moment';

import { colors } from '../config/colors/nba';
import { IconButton } from 'react-native-paper';
import styles from './styles';

const isWinner = ({ game, team }) => {
  const { hTeam, vTeam } = game;

  if (
    hTeam.teamId === team.teamId &&
    Number(team.score) > Number(vTeam.score)
  ) {
    return true;
  } else if (
    vTeam.teamId === team.teamId &&
    Number(team.score) > Number(hTeam.score)
  ) {
    return true;
  }
  return false;
};

export const getPeriodWithOrdinal = period => {
  switch (period.current) {
    case 1:
      return '1st';
    case 2:
      return '2nd';
    case 3:
      return '3rd';
    case 4:
      return '4th';
    default:
      if (period.current > 4) {
        return `${period.current - period.maxRegular}OT`;
      }
      return '';
  }
};

export const GameInfo = ({ game }) => {
  const { period, statusNum, clock, startTimeUTC } = game;
  const startTime = moment(startTimeUTC);
  if (period.isHalftime === true) {
    return <Text style={styles.infoText}>Half</Text>;
  } else if (game.period.current === 0) {
    return (
      <View>
        <Text style={styles.infoText}>{`${
          startTime.diff(moment(), 'days') === 0
            ? 'Today'
            : startTime.format('ddd, MMM DD')
        }`}</Text>
        <Text style={styles.infoText}>{startTime.format('h:mmA')}</Text>
      </View>
    );
  } else {
    switch (statusNum) {
      case 2:
        return (
          <Text style={styles.infoText}>
            {period.isEndOfPeriod ? 'End of ' : clock}{' '}
            {getPeriodWithOrdinal(period)}
          </Text>
        );
      case 3:
        return (
          <View>
            <Text style={styles.infoText}>
              Final
              {period.current > 4
                ? ` ${period.current - period.maxRegular}OT`
                : null}
            </Text>
            <Text style={[styles.infoText, { color: colors.grey.opaque }]}>{`${
              startTime.diff(moment(), 'days') === 0
                ? 'Today'
                : startTime.format('ddd, MMM DD')
            }`}</Text>
          </View>
        );
      default:
        return <Text />;
    }
  }
};

GameInfo.propTypes = {
  game: PropTypes.object
};

export const Score = ({ game, team }) => {
  if (game.period.current === 0) {
    return null;
  } else {
    return (
      <Text
        style={{ fontWeight: isWinner({ game, team }) ? 'bold' : 'normal' }}
      >{`${team.score}`}</Text>
    );
  }
};

Score.propTypes = {
  game: PropTypes.object,
  team: PropTypes.object
};

export const Record = ({ game, team }) => {
  return game.period.current === 0 ? (
    <Text style={styles.recordText}>{`(${team.win} - ${team.loss})`}</Text>
  ) : null;
};

Record.propTypes = {
  game: PropTypes.object,
  team: PropTypes.object
};

export const GameWinner = ({ game, team }) => {
  if (game.statusNum !== 3) return null;

  return isWinner({ game, team }) ? (
    <IconButton icon="medal" size={12} />
  ) : null;
};

GameWinner.propTypes = {
  game: PropTypes.object,
  team: PropTypes.object
};

export const TeamLine = ({ game, team }) => {
  return (
    <View style={styles.teamLineView}>
      <View style={styles.teamLogoView}>
        {teams[team.triCode] ? (
          <Image
            style={styles.teamLogoImage}
            resizeMode="contain"
            source={teams[team.triCode].image}
          />
        ) : null}
      </View>
      <View style={styles.teamNicknameView}>
        <Text
          style={[
            styles.teamNicknameText,
            { fontWeight: isWinner({ game, team }) ? 'bold' : null }
          ]}
        >
          {team.nickname}
        </Text>
        <Record game={game} team={team} />
      </View>

      <View style={styles.scoreView}>
        <Score game={game} team={team} />
      </View>
      <View style={styles.gameWinnerView}>
        <GameWinner game={game} team={team} />
      </View>
    </View>
  );
};

TeamLine.propTypes = {
  game: PropTypes.object,
  team: PropTypes.object
};
