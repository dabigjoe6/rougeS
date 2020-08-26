import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from './styles';
import {secondaryColor} from '../../styles/colors';
import {LocationBtn, Button} from '../../components';

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <View style={styles.container}>
        <LottieView
          source={require('../../res/lottie/lf30_editor_i4cXOJ.json')}
          style={styles.locationIcon}
          autoPlay
          loop
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
        <LocationBtn currentLocation={'Okerube, Ikotun'} />
        <View style={styles.actionsWrapper}>
          <Button title="Report now" />
          <Button title="Check route" alt={true} />
        </View>
      </View>
    </>
  );
};

export default Home;
