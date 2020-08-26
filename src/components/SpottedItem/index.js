import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './styles';

const SpottedItem = () => {
  return (
    <View style={styles.container}>
      <Icon size={15} name="alarm-light" color="red" type="material-community" />
      <Text style={styles.text}>Alagomeji, Yaba</Text>
    </View>
  );
};

export default SpottedItem;
