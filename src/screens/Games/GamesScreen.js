import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView
} from 'react-native';

import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';
import { IconButton } from 'react-native-paper';

import { Header } from '../../components/Header';
import GameService from '../../services/GameService';
import Games from '../../components/Games/Games';
import { connectAlert } from '../../components/Alert/';

import { colors } from '../../config/colors/nba';
import styles from './styles';

const GamesScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(moment());
  const [isDateModalVisible, setIsDateModalVisible] = useState(false);
  const [games, setGames] = useState(null);

  const { alertWithType } = props;

  useEffect(() => {
    const dateParam = date || moment();
    setDate(dateParam);
    getGames(dateParam);
  }, []);

  const getGames = date => {
    setIsLoading(true);
    GameService.getGames(date)
      .then(games => {
        setGames(games);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        alertWithType('error', error.message);
      });
  };

  const onDateChange = date => {
    const newDate = moment(date);
    setIsDateModalVisible(false);
    setDate(newDate);
    getGames(newDate);
  };

  return (
    <>
      <Header {...props}>
        <TouchableOpacity
          onPress={() => setIsDateModalVisible(true)}
          style={styles.headerDateTouchable}
        >
          <Text style={styles.headerDateText}>{`${date.format(
            'ddd, MMM DD'
          )}`}</Text>
        </TouchableOpacity>
      </Header>

      <Modal
        animationType="slide"
        transparent={false}
        visible={isDateModalVisible}
      >
        <SafeAreaView style={styles.safeAreaView}>
          <IconButton
            icon="close"
            onPress={() => setIsDateModalVisible(false)}
          />

          <View style={styles.calendarPickerView}>
            <CalendarPicker
              selectedStartDate={date}
              startFromMonday={true}
              allowRangeSelection={false}
              todayBackgroundColor={colors.blue.primary}
              selectedDayColor={colors.black.primary}
              selectedDayTextColor={colors.white.primary}
              onDateChange={onDateChange}
            />
          </View>
        </SafeAreaView>
      </Modal>

      {!isLoading && games && games.length === 0 ? (
        <View style={styles.noGamesView}>
          <Text style={styles.noGamesText}>No Games Today</Text>
        </View>
      ) : (
        <>
          {isLoading ? (
            <View style={styles.loadingView}>
              <ActivityIndicator size="large" color={colors.blue.primary} />
            </View>
          ) : (
            <ScrollView style={styles.scrollView}>
              <Games games={games} />
            </ScrollView>
          )}
        </>
      )}
    </>
  );
};

export default connectAlert(GamesScreen);
