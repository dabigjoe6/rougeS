import React from 'react';
import {View, Text} from 'react-native';
import {secondaryColor} from '../../styles/colors';
import {Icon} from 'react-native-elements';
import {styles} from './styles';

const SearchItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Icon name="marker" type="foundation" color={secondaryColor} />
        <View style={styles.locationWrapper}>
          <Text style={styles.primaryText}>Alagomeji-Yaba</Text>
          <Text style={styles.secondaryText}>Lagos</Text>
        </View>
      </View>
      <View>
        <Icon name="arrow-up-left" type="feather" color={'#3B75FE'} />
      </View>
    </View>
  );
};

export default SearchItem;
