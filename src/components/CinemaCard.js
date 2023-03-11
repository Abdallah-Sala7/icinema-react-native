import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, SIZES} from '../constants';
import assets from '../assets/assets';
import {useDispatch, useSelector} from 'react-redux';
import {setCinema} from '../app/reducers/chooseSlice';

const CinemaCard = ({item}) => {
  const dispatch = useDispatch();
  const {cinema} = useSelector(state => state.choose);

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {backgroundColor: cinema === item ? COLORS.white : COLORS.gray},
      ]}
      activeOpacity={0.8}
      onPress={() => dispatch(setCinema(item))}>
      <Image source={item.image} style={styles.image} />

      <View style={{flex: 1}}>
        <Text
          style={[
            styles.text,
            {color: cinema === item ? COLORS.dark : COLORS.white},
          ]}>
          {item.name}
        </Text>

        <Text
          style={[
            styles.text,
            {color: cinema === item ? COLORS.dark : COLORS.white},
          ]}>
          {item.location}
        </Text>

        <View
          style={[
            styles.rate,
            {backgroundColor: cinema === item ? COLORS.dark : COLORS.white},
          ]}>
          <Image
            source={assets.star}
            style={{
              width: 14,
              height: 14,
              marginRight: 2,
              resizeMode: 'contain',
            }}
          />

          <Text style={{color: cinema === item ? COLORS.white : COLORS.dark}}>
            3.5
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CinemaCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    flexDirection: 'row',
    borderRadius: SIZES.radius,
    marginBottom: 10,
  },

  image: {
    width: 96,
    height: 96,
    marginRight: 10,
    borderRadius: SIZES.radius,
    resizeMode: 'cover',
  },

  text: {
    fontSize: SIZES.font,
    lineHeight: 20,
    marginBottom: 5,
  },

  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 52,
    height: 30,
    borderRadius: 16,
  },
});
