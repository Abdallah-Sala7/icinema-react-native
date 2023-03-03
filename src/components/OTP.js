import {StyleSheet, TextInput, View} from 'react-native';
import { useRef } from 'react';
import {InputStyle} from '../constants';

import {useDispatch} from 'react-redux'
import { setOtp } from '../app/reducers/otpSilce';

const OTP = () => {
  const dispatch = useDispatch()
  
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  return (
    <View style={{flexDirection: 'row', gap: 10}}>
      <TextInput
        style={styles.otpInput}
        keyboardType={'number-pad'}
        maxLength={1}
        ref={firstInput}
        onChangeText={text => {
          dispatch(setOtp({key:1, value:text}))
          text && secondInput.current.focus();
        }}
      />

      <TextInput
        style={styles.otpInput}
        keyboardType={'number-pad'}
        maxLength={1}
        ref={secondInput}
        onChangeText={text => {
          dispatch(setOtp({key:2, value:text}))
          text ? thirdInput.current.focus() : firstInput.current.focus();
        }}
      />

      <TextInput
        style={styles.otpInput}
        keyboardType={'number-pad'}
        maxLength={1}
        ref={thirdInput}
        onChangeText={text => {
          dispatch(setOtp({key:3, value:text}));
          text ? fourthInput.current.focus() : secondInput.current.focus();
        }}
      />

      <TextInput
        style={styles.otpInput}
        keyboardType={'number-pad'}
        maxLength={1}
        ref={fourthInput}
        onChangeText={text => {
          dispatch(setOtp({key:4, value:text}));
          text ? fourthInput.current.blur() : thirdInput.current.focus()
        }}
      />
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  otpInput:{
    ...InputStyle,
    flex: 1,
    textAlign: 'center',
    fontSize: 25,
  }
})