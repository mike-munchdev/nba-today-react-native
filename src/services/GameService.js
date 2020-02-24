import axios from 'axios';
import Constants from 'expo-constants';
const NODE_ENV =
  typeof process !== 'undefined' && process.env && process.env.NODE_ENV;

class GameService {
  static getGames(date) {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${Constants.manifest.extra.nba[NODE_ENV].httpProtocol}://${
          Constants.manifest.extra.nba[NODE_ENV].apiServerUrl
        }/api/v1/games/${date.format('YYYYMMDD')}`;

        const response = await axios.get(url);
        resolve(response.data);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default GameService;
