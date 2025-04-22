import Colors from '@common/colors';
import CustomDivider from '@components/customDivider';
import RadioButtonItem from '@components/radioButtonItem';
import {t} from 'i18next';
import {useState} from 'react';

import {Modal, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

type SortModalProps = {
  visible: boolean;
  onClose: () => void;
  selectedOption: string | null;
  setSelectedOption: (option: string) => void;
};

const SortModal: React.FC<React.PropsWithChildren<SortModalProps>> = ({
  visible,
  onClose,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <Modal
      transparent
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Sorted By</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={24} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <CustomDivider lineStyle={{height: 2}} />
          {/* -----------modal content------*/}
          <View>
            <RadioButtonItem
              label={t('Published at')}
              borderStyle={{
                borderColor: 'rgba(255, 255, 255, 0)',
              }}
              selected={selectedOption === 'publishedAt'}
              onPress={() => setSelectedOption('publishedAt')}
            />
            <RadioButtonItem
              label={t('Author')}
              borderStyle={{
                borderColor: 'rgba(255, 255, 255, 0)',
              }}
              selected={selectedOption === 'author'}
              onPress={() => setSelectedOption('author')}
            />
            <RadioButtonItem
              label={t('Title')}
              borderStyle={{
                borderColor: 'rgba(255, 255, 255, 0)',
              }}
              selected={selectedOption === 'title'}
              onPress={() => setSelectedOption('title')}
            />
          </View>
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
  button: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
export default SortModal;
