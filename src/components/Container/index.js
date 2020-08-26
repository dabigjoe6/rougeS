import React from 'react';
import {View, StatusBar} from 'react-native';
import {styles} from './styles';
import BackBtn from '../BackBtn';

const Container = ({children, back, style}) => {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <View style={{...styles.container, ...style}}>
        {back ? (
          <View style={styles.backBtnWrapper}>
            <BackBtn onPress={() => back()} />
          </View>
        ) : null}
        {children}
      </View>
    </>
  );
};

export default Container;
