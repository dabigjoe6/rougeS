import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './styles';
import {secondaryColor} from '../../styles/colors';

const LocationBtn = ({currentLocation, icon, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.container, icon ? styles.icon : null]}>
        {icon && (
          <Icon
            name="magnifier"
            type="simple-line-icon"
            color={secondaryColor}
          />
        )}
        <Text style={styles.text}>{currentLocation}</Text>
      </View>
    </Pressable>
  );
};

export default LocationBtn;
