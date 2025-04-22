import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

import {StackNavigationProp} from '@react-navigation/stack';
import {ParamListBase} from '@react-navigation/native';
import screenNames from '@navigation/screenNames';
import Colors from '@common/colors';

type ISplashScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<ISplashScreenProps> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate(screenNames.NewsScreens);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={{fontSize: 25, color: Colors.black, fontWeight: 'bold'}}>
          News App
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
