import {Image, StyleSheet, Text, View} from 'react-native';
import {ButContainer, COLORS, TextStyle, SplashContainer} from '../constants';
import {RectButton} from '../components/Butons';
import assets from '../assets/assets';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={SplashContainer}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={assets.movieNightGrd}
          resizeMode="contain"
          style={styles.img}
        />
      </View>

      <Text style={TextStyle}>
        ICinema provides you with a unique experience to know everything related
        to movies, you can watch, book and search for everything you want
      </Text>

      <View style={ButContainer}>
        <RectButton
          BGcolor={COLORS.primary}
          color={COLORS.white}
          mb={10}
          handlePress={() => navigate('register')}>
          Register
        </RectButton>

        <RectButton BGcolor={COLORS.white} color={COLORS.gray}>
          Guest
        </RectButton>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  img: {
    width: 230,
    height: 220,
    marginTop: 50,
    resizeMode: 'contain',
    marginBottom: 30,
  },
});
