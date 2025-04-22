import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import React from 'react';
import Colors from '@common/colors';

interface DividerWithTextProps {
  text?: string;
  lineStyle?: ViewStyle;
  textStyle?: TextStyle;
}
const CustomDivider: React.FC<DividerWithTextProps> = ({
  text,
  lineStyle,
  textStyle,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, lineStyle]} />
      {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
      <View style={[styles.line, lineStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    // marginTop: ScaleHeight(80),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.lightGray,
  },
  text: {
    marginHorizontal: 10,
    color: Colors.lightGray, // Adjust color as needed
  },
});

export default CustomDivider;
