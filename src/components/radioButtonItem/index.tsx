import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import Colors from '@common/colors';

interface RadioButtonProps {
  selected: boolean;
  onPress: () => void;
  label: string;
  icon?: JSX.Element;
  icon2?: JSX.Element;
  widthStyle?: ViewStyle;
  borderStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const RadioButtonItem: FC<RadioButtonProps> = ({
  selected,
  onPress,
  label,
  icon,
  icon2,
  widthStyle,
  borderStyle,
  labelStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, borderStyle]}
      accessibilityRole="radio"
      accessibilityState={{selected}}>
      <View style={[styles.content, widthStyle]}>
        <View style={styles.row}>
          <View
            style={[
              styles.outerCircle,
              {borderColor: selected ? Colors.primary : Colors.gray},
            ]}>
            {selected && <View style={styles.innerCircle} />}
          </View>
          <Text
            style={[
              styles.label,
              labelStyle,
              {color: selected ? Colors.primary : Colors.gray},
            ]}>
            {label}
          </Text>
        </View>
        {icon2 && <View>{icon2}</View>}
        {icon && <View>{icon}</View>}
      </View>
    </TouchableOpacity>
  );
};

export default RadioButtonItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 10,
    borderRadius: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    gap: -5,
    alignItems: 'center',
  },
  outerCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  label: {
    marginHorizontal: 10,
    // fontFamily: Fonts.TajawalRegular,
    fontSize: 16,
  },
});
