import Colors from '@common/colors';
// import Fonts from '@common/fonts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // gap: 1,
  },
  btnTitle: {
    fontSize: 18,
    // fontWeight: 'bold',
    // fontFamily:,
    color: Colors.white,
    paddingLeft: 10,
  },
  icon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
});

export default styles;
