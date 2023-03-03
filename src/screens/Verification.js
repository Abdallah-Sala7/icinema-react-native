import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {RectButton} from '../components/Butons';
import {useSelector} from 'react-redux';

import {OTP, Header} from '../components';
import {ButContainer, COLORS, CONTAINER, TextStyle} from '../constants';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Verification = ({
  route: {
    params: {phoneNumber},
  },
}) => {
  const {navigate} = useNavigation();
  const {otpCode} = useSelector(state => state.otp);
  const [errorOtp, setErrorOtp] = useState(false);

  const checkOtp = () => {
    let otp = Object.values(otpCode).join('');
    if (otp === '1234') {
      navigate('interests');
      setErrorOtp(false);
      AsyncStorage.setItem('token','abdallah')
    } else setErrorOtp(true);
  };

  return (
    <View style={CONTAINER}>
      <Header />

      <View style={{marginTop: 50}}>
        <Text style={{...TextStyle, marginBottom: 30}}>
          Enter the OTP just sent you at
          <Text style={{color: COLORS.primary}}> {phoneNumber}</Text>
        </Text>

        <OTP handleOtp={checkOtp} />

        {errorOtp && (
          <Text
            style={{
              ...TextStyle,
              marginTop: 30,
              color: '#ff3333',
              textAlign: 'left',
            }}>
            Invaild OTP
          </Text>
        )}
      </View>

      <View style={ButContainer}>
        <RectButton
          BGcolor={COLORS.primary}
          color={COLORS.white}
          handlePress={() => checkOtp()}>
          Confirm
        </RectButton>
      </View>
    </View>
  );
};

export default Verification;