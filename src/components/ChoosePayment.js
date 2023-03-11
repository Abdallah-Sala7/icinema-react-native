import {
  Animated,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants';
import assets from '../assets/assets';
import PaymentCard from './PaymentCard';

const ChoosePayment = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={{color: COLORS.white}}>Choose Payment</Text>
      </View>

      <PaymentCard
        img={assets.credit}
        title={'Credit Card'}
        disc={'**** **** **** 1425'}
      />

      <PaymentCard
        img={assets.Ewallet}
        title={'E-Wallet'}
        disc={'Vodafone, Etisalat'}
      />

      <PaymentCard 
        img={assets.fawry} 
        title={'Fawry'} 
        disc={'100100***'} 
      />
      
      <PaymentCard
        img={assets.ICwallet}
        title={'iCinema Wallet'}
        disc={'Current balance : 0 EGP'}
      />
    </View>
  );
};

export default ChoosePayment;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.radius,
  },
});
