import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from './styles';
import {secondaryColor} from '../../styles/colors';
import {LocationBtn, Button, Container} from '../../components';

const Home = ({navigation}) => {
  return (
    <Container>
      <LottieView
        source={require('../../res/lottie/lf30_editor_i4cXOJ.json')}
        style={styles.locationIcon}
        autoPlay
      />
      <View style={styles.row}>
        <Text style={styles.text}>
          Report rogue <Text style={{color: secondaryColor}}>SARS</Text>{' '}
          operatives currently at{' '}
        </Text>
        <LottieView
          source={require('../../res/lottie/lf30_editor_0L5HgJ.json')}
          autoPlay
          loop
          style={styles.downArrow}
        />
      </View>
      <LocationBtn
        icon
        currentLocation={'Current Location... Press to change'}
        onPress={() => navigation.navigate('Search')}
      />
      <View style={styles.actionsWrapper}>
        <Button
          title="Report now"
          onPress={() => navigation.navigate('Success')}
        />
        <Button
          title="Check route"
          alt={true}
          onPress={() => navigation.navigate('Route')}
        />
      </View>
      <Text style={styles.disclaimer}>
        <Text style={{color: secondaryColor}}>Disclaimer:</Text> This is not an
        official report, and this application has no relationship with the NPF
        or Federal Government of Nigeria
      </Text>
    </Container>
  );
};

export default Home;
