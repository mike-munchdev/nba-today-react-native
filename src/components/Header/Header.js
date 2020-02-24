import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, SafeAreaView } from 'react-native';

import { IconButton } from 'react-native-paper';
import { connectAlert } from '../Alert';
import { colors } from '../../config/colors/nba';

import styles from './styles';

const Header = ({ rightIcons, leftIcons, navigation, children }) => {
  const isFirstRoute = navigation.isFirstRouteInParent();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.leftContainer}>
          {!isFirstRoute ? (
            <IconButton
              icon="keyboard-backspace"
              size={25}
              color={colors.white.primary}
              onPress={() => navigation.goBack()}
            />
          ) : null}
          {leftIcons
            ? leftIcons.map((i, index) => {
                return (
                  <IconButton
                    key={index}
                    icon={i.iconName}
                    size={25}
                    onPress={i.onPress}
                  />
                );
              })
            : null}
        </View>
        <View style={styles.titleContainer}>{children}</View>
        <View style={styles.rightContainer}>
          {rightIcons
            ? rightIcons.map((i, index) => {
                return (
                  <IconButton
                    key={index}
                    icon={i.iconName}
                    size={25}
                    onPress={i.onPress}
                  />
                );
              })
            : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

Header.propTypes = {
  rightIcons: PropTypes.arrayOf(
    PropTypes.shape({ iconName: PropTypes.string, onPress: PropTypes.func })
  ),
  leftIcons: PropTypes.arrayOf(
    PropTypes.shape({ iconName: PropTypes.string, onPress: PropTypes.func })
  ),
  navigation: PropTypes.object,

  children: PropTypes.any
};

export default connectAlert(Header);
