import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import Header from '../components/Header';
import {
  COLORS,
  SIZES,
  TextStyle,
  InputStyle,
  ButContainer,
  SplashContainer,
} from '../constants';
import {RectButton} from '../components/Butons';
import {useNavigation} from '@react-navigation/native';

const RegisterScreen = () => {
  const {navigate} = useNavigation();
  const [show, setShow] = useState(false);

  const [countryName, setCountryName] = useState('Egypt');
  const [countryCode, setCountryCode] = useState('+20');
  const [countryFlag, setCountryFlag] = useState('🇪🇬');

  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={SplashContainer}>
      <Header />

      <Text
        style={{
          ...TextStyle,
        }}>
        Enter your country code and your phone number
      </Text>

      <View style={{width: '100%', paddingVertical: 70}}>
        <View style={{width: '100%', marginBottom: 30}}>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{...InputStyle, justifyContent: 'center', paddingEnd: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: SIZES.font,
                }}>
                {countryName}
              </Text>

              <Text>{countryFlag}</Text>
            </View>
          </TouchableOpacity>

          <CountryPicker
            show={show}
            pickerButtonOnPress={item => {
              setCountryCode(item.dial_code);
              setCountryName(item.name['en']);
              setCountryFlag(item.flag);
              setShow(false);
            }}
            excludedCountries={['IL']}
            androidWindowSoftInputMode={'pin'}
            inputPlaceholder={'Your Country'}
            style={{
              countryButtonStyles: {
                backgroundColor: COLORS.gray,
              },

              textInput: {
                backgroundColor: COLORS.gray,
              },

              modal: {
                height: 500,
                backgroundColor: COLORS.dark,
              },

              line: {
                backgroundColor: COLORS.gray,
              },
            }}
          />
        </View>

        <View style={{flexDirection: 'row', gap: 10}}>
          <Text
            style={{
              padding: 10,
              backgroundColor: COLORS.gray,
              borderRadius: SIZES.radius,
              verticalAlign: 'middle',
            }}>
            {countryCode}
          </Text>

          <TextInput
            style={{...InputStyle, flex: 1}}
            keyboardType={'phone-pad'}
            placeholder="102 507 7437"
            caretHidden
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>
      </View>

      <View style={ButContainer}>
        <RectButton
          BGcolor={COLORS.primary}
          color={COLORS.white}
          handlePress={() => navigate('verification', {phoneNumber})}>
          get code
        </RectButton>
      </View>
    </View>
  );
};

export default RegisterScreen;
