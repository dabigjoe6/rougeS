import React from 'react';
import {Text, Pressable} from 'react-native';
import {Container} from '../../components';
import LottieView from 'lottie-react-native';
import {styles} from './styles';
const Success = ({navigation}) => {
  return (
    <Container>
      <LottieView
        source={require('../../res/lottie/lf30_editor_njtoIS.json')}
        style={styles.successIcon}
        autoPlay
      />
      <Text style={styles.successText}>
        Hurray! you've notified others allowing everyone can be alert of these
        rogue SARS
      </Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>Close</Text>
      </Pressable>
    </Container>
  );
};

export default Success;
