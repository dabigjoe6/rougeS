import React from 'react';
import {View, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './styles';
import {secondaryColor} from '../../styles/colors';

const LocationBtn = ({currentLocation}) => {
  return (
    <View style={styles.container}>
      <Icon name="magnifier" type="simple-line-icon" color={secondaryColor} />
      <Text style={styles.text}>{currentLocation}</Text>
    </View>
  );
};

export default LocationBtn;
