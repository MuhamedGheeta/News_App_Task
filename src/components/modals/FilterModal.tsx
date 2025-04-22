import Colors from '@common/colors';
import CustomDivider from '@components/customDivider';
import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
  onApply: (fromDate: Date, toDate: Date) => void;
};

const FilterModal: React.FC<React.PropsWithChildren<FilterModalProps>> = ({
  visible,
  onClose,
  onApply,
}) => {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromPicker, setShowFromPicker] = useState(false);
  const [showToPicker, setShowToPicker] = useState(false);

  const handleFromChange = (_: any, selectedDate?: Date) => {
    setShowFromPicker(Platform.OS === 'ios');
    if (selectedDate) {
      setFromDate(selectedDate);
    }
  };

  const handleToChange = (_: any, selectedDate?: Date) => {
    setShowToPicker(Platform.OS === 'ios');
    if (selectedDate) {
      setToDate(selectedDate);
    }
  };

  const handleApply = () => {
    onApply(fromDate, toDate);
    onClose();
  };
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Filter By Date</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>

          <CustomDivider lineStyle={{height: 2}} />

          {/* From Date Picker */}
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowFromPicker(true)}>
            <Text style={styles.dateText}>
              <Text style={styles.label}>From: </Text>
              {fromDate.toDateString()}
            </Text>
            <Icon name="calendar-outline" size={20} color={Colors.black} />
          </TouchableOpacity>

          {showFromPicker && (
            <DateTimePicker
              value={fromDate}
              mode="date"
              display="default"
              onChange={handleFromChange}
            />
          )}

          {/* To Date Picker */}
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowToPicker(true)}>
            <Text style={styles.dateText}>
              <Text style={styles.label}>To: </Text>
              {toDate.toDateString()}
            </Text>
            <Icon name="calendar-outline" size={20} color={Colors.black} />
          </TouchableOpacity>

          {showToPicker && (
            <DateTimePicker
              value={toDate}
              mode="date"
              display="default"
              onChange={handleToChange}
            />
          )}

          {/* Apply Button */}
          <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
  dateButton: {
    marginTop: 20,
    padding: 12,
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    color: Colors.black,
    fontSize: 16,
  },
  label: {
    fontWeight: 'bold',
    color: Colors.black,
    fontSize: 18,
  },
  applyButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: Colors.primary,
    borderRadius: 8,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilterModal;
