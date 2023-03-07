import {StyleSheet, Text, View} from 'react-native';
import {
  ButContainer,
  COLORS,
  SplashContainer,
  intrestData,
  movieLagData,
  TextStyle,
} from '../constants';
import {InterestBtn, RectButton} from '../components/Butons';
import {useDispatch} from 'react-redux';
import {setLogin} from '../app/reducers/loginSlice';
import {Header} from '../components';

const Interests = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setLogin(true));
  };

  return (
    <View style={SplashContainer}>
      <Header />

      <Text style={{...TextStyle, marginBottom: 20}}>
        What are your favorite genres ?
      </Text>

      <View style={styles.intrestContainer}>
        {intrestData.map(item => (
          <InterestBtn key={item}>{item}</InterestBtn>
        ))}
      </View>

      <Text style={{...TextStyle, marginVertical: 20}}>
        Which languages do you prefer ?
      </Text>

      <View style={styles.intrestContainer}>
        {movieLagData.map(item => (
          <InterestBtn key={item}>{item}</InterestBtn>
        ))}
      </View>

      <View style={ButContainer}>
        <RectButton
          BGcolor={COLORS.primary}
          color={COLORS.white}
          handlePress={handleLogin}>
          Confirm
        </RectButton>
      </View>
    </View>
  );
};

export default Interests;

const styles = StyleSheet.create({
  intrestContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
