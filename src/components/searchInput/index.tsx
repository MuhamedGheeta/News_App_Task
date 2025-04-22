import React, {useState} from 'react';
import {View, TextInput, TextStyle, ViewStyle, I18nManager} from 'react-native';
import {styles} from './styles';

import {Svg_Icon_Search} from '@assets/svgs';
import Colors from '@common/colors';
const isRTL = I18nManager.isRTL;

type InputProps = {
  placeholder: string;
  style?: TextStyle | ViewStyle;
  onChangeText?: (text: string) => void;
  editable?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
};

const SearchInput: React.FC<InputProps> = ({
  placeholder,
  onChangeText,
  style,
  editable = true,
  onFocus,
  onBlur,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    } else {
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    } else {
      setIsFocused(false);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Svg_Icon_Search />

      <TextInput
        style={[styles.input, {textAlign: isRTL ? 'right' : 'left'}]}
        placeholder={!isFocused ? placeholder : ''}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.gray}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={editable}
        value={value}
      />
    </View>
  );
};

export default SearchInput;
