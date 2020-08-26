/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button as Btn} from 'react-native-elements';
import {styles} from './styles';
import {secondaryColor} from '../../styles/colors';

const Button = ({title, alt, ...props}) => {
  return (
    <Btn
      {...props}
      title={title}
      buttonStyle={{
        ...styles.button,
        backgroundColor: alt ? 'transparent' : secondaryColor,
        borderColor: alt ? secondaryColor : 'transparent',
      }}
      containerStyle={{...styles.container}}
      titleStyle={{...styles.title, color: alt ? secondaryColor : 'black'}}
    />
  );
};

export default Button;
