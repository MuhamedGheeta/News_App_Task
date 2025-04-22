import {View, Text, TextStyle, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import Fonts from '@common/Fonts';
import Colors from '@common/Colors';

// Adjust the import path as per your project structure

interface CustomTextProps {
  Txt: any; // Text to display
  style?: TextStyle | TextStyle[]; // Optional styles for customization
  fontType?:
    | 'NunitoSansBold'
    | 'NunitoSansSemiBold'
    | 'NunitoSansRegular'
    | 'NunitoSansExtraBold'
    | 'NunitoSansMedium'; // Optional font type
}

const CustomText: FC<CustomTextProps> = ({Txt = '', style, fontType}) => {
  return (
    <View>
      <Text
        style={[styles.text, style, fontType && {fontFamily: Fonts[fontType]}]}>
        {Txt}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: Colors.DarkGray,
  },
});

export default CustomText;
