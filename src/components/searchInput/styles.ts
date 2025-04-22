import Colors from '@common/colors';
import {ScaleWidth} from '@common/fitSize';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    gap: 1,
  },
  icon: {
    marginRight: 6,
    justifyContent: 'flex-start',
  },
  input: {
    // flex: 1,
    paddingVertical: 6,
    fontSize: ScaleWidth(16),
    color: Colors.black,
  },
});
