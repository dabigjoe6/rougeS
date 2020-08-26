import React from 'react';

import {View, Image, Text} from 'react-native';
import {Container, LocationBtn, SpottedItem} from '../../components';
import {styles} from './styles';

const Route = ({navigation}) => {
  return (
    <Container style={styles.container} back={() => navigation.goBack()}>
      <View style={styles.routeHeader}>
        <View style={styles.locationDropWrapper}>
          <Image
            source={require('../../res/images/location_drop.png')}
            style={styles.locationDrop}
          />
        </View>
        <View style={styles.locationWrapper}>
          <LocationBtn
            onPress={() => navigation.navigate('Search')}
            currentLocation={'Your Location'}
          />
          <LocationBtn
            onPress={() => navigation.navigate('Search')}
            currentLocation={'Alagomeji, Yaba'}
          />
        </View>
      </View>
      <View style={styles.mapArea}>
        <Image
          source={require('../../res/images/placeholder.png')}
          style={styles.placeholderImg}
        />
      </View>
      <View style={styles.spottedArea}>
        <Text style={styles.spottedText}>Spotted at:</Text>
        <SpottedItem />
        <SpottedItem />
        <SpottedItem />
      </View>
    </Container>
  );
};

export default Route;
