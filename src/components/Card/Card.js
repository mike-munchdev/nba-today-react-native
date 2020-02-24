import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

import styles from './styles';

const Card = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};
export default Card;

Card.propTypes = {
  children: PropTypes.any,
  style: ViewPropTypes.style
};
