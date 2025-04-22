import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';

import styles from './styles';

interface CustomButtonWithIconProps {
  onPress?: () => void;
  icon?: JSX.Element;
  text: string;
  btnStyle?: ViewStyle;
  btnTitleStyle?: TextStyle;
  disabled?: boolean;
}

const ButtonWithIcon: React.FC<CustomButtonWithIconProps> = ({
  onPress,
  icon,
  text,
  btnStyle,
  btnTitleStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, btnStyle]}
      onPress={onPress}
      disabled={disabled}>
      {icon}
      <Text style={[styles.btnTitle, btnTitleStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
