import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import {ButContainer, COLORS, CONTAINER, TextStyle} from '../constants';
import assets from '../assets/assets';
import {RectButton} from './Butons';

const PaymentDone = () => {
  return (
    // view component takes up all parent height
        <View style={{flex: 1, alignItems: 'center',}}>
      <View style={{marginTop: 30, marginBottom: 50}}>
        <Image
          source={assets.payment}
          style={{width: 280, height: 190, resizeMode: 'contain'}}
        />
      </View>

      <Text style={[TextStyle, {marginHorizontal: 10}]}>
        Your tickets had been successfully booked , you can get it anytime from
        Booking .
      </Text>

      <View style={[ButContainer, {bottom:0}]}>
        <RectButton BGcolor={COLORS.primary} mb={10}>
          View Booking
        </RectButton>

        <RectButton BGcolor={COLORS.white}>Home</RectButton>
      </View>
    </View>
  );
};

export default PaymentDone;

const styles = StyleSheet.create({});
