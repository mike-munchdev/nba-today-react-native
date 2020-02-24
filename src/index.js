import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import { Asset } from 'expo-asset';
import { FontAwesome } from '@expo/vector-icons';

import { AlertProvider } from './components/Alert';
import Navigator from './config/routes';

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const cacheFonts = fonts => {
  return fonts.map(font => Font.loadAsync(font));
};

const _loadAssetsAsync = async () => {
  // const imageAssets = cacheImages([require("./assets/bg-2.jpg")]);
  const imageAssets = cacheImages([
    require('./assets/images/ATL.png'),
    require('./assets/images/BKN.png'),
    require('./assets/images/BOS.png'),
    require('./assets/images/CHA.png'),
    require('./assets/images/CHI.png'),
    require('./assets/images/CLE.png'),
    require('./assets/images/DAL.png'),
    require('./assets/images/DEN.png'),
    require('./assets/images/DET.png'),
    require('./assets/images/GSW.png'),
    require('./assets/images/HOU.png'),
    require('./assets/images/IND.png'),
    require('./assets/images/LAC.png'),
    require('./assets/images/LAL.png'),
    require('./assets/images/MEM.png'),
    require('./assets/images/MIA.png'),
    require('./assets/images/MIL.png'),
    require('./assets/images/MIN.png'),
    require('./assets/images/NOP.png'),
    require('./assets/images/NYK.png'),
    require('./assets/images/OKC.png'),
    require('./assets/images/ORL.png'),
    require('./assets/images/PHI.png'),
    require('./assets/images/PHX.png'),
    require('./assets/images/POR.png'),
    require('./assets/images/SAC.png'),
    require('./assets/images/SAS.png'),
    require('./assets/images/TOR.png'),
    require('./assets/images/UTA.png'),
    require('./assets/images/WAS.png')
  ]);

  const fontAssets = cacheFonts([
    FontAwesome.font,
    { Ionicons: require('./assets/fonts/Ionicons.ttf') },
    { Roboto_medium: require('./assets/fonts/Roboto_medium.ttf') },
    { Roboto: require('./assets/fonts/Roboto.ttf') }
  ]);

  await Promise.all([...imageAssets, ...fontAssets]);
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={_loadAssetsAsync}
        onFinish={() => {
          setIsReady(true);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <AlertProvider>
      <Navigator />
    </AlertProvider>
  );
}
