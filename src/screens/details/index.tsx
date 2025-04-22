import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '@common/colors';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.headerTxt}>{'Details List'}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
