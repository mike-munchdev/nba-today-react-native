import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { GamesScreen } from '../screens/Games';

const GamesStack = createStackNavigator({
  Games: {
    screen: GamesScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default createAppContainer(GamesStack);
