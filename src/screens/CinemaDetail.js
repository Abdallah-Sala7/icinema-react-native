import {Image, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {COLORS, CONTAINER, TextStyle} from '../constants';
import {DetailsBtn, Header, InterestBtn} from '../components';
import assets from '../assets/assets';

const CinemaDetail = () => {
  const {params} = useRoute();
  const {item} = params;

  return (
    <View style={CONTAINER}>
      <Header />

      <View style={styles.movireCard}>
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Image source={item.image} style={styles.image} />

          <View style={{flex: 1}}>
            <View style={styles.cardHeader}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: COLORS.primary,
                  fontSize: 16,
                }}>
                {item.name}
              </Text>

              <View style={styles.cardRate}>
                <Image source={assets.star} style={styles.icon} />
                <Text
                  style={{
                    color: COLORS.primary,
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}>
                  4.5
                </Text>
              </View>

              <Image source={assets.bookmark} style={styles.icon} />
            </View>

            <View style={{flex: 1}}>
              <Text
                style={{
                  ...TextStyle,
                  fontWeight: 'bold',
                  textAlign: 'left',
                }}>
                Starring:
              </Text>

              <Text style={{...TextStyle, textAlign: 'left'}}>{item.disc}</Text>

              <Text style={TextStyle}>Release date: 14/12/2022</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <DetailsBtn> Action </DetailsBtn>
          <DetailsBtn> Adventure </DetailsBtn>
          <DetailsBtn> +8 </DetailsBtn>
        </View>
      </View>
    </View>
  );
};

export default CinemaDetail;

const styles = StyleSheet.create({
  movireCard: {
    backgroundColor: COLORS.gray,
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.primary,
  },

  image: {
    width: 95,
    height: 135,
    borderRadius: 8,
    marginRight: 10,
    resizeMode: 'cover',
  },

  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  icon: {
    width: 15,
    height: 15,
    tintColor: COLORS.primary,
    resizeMode: 'contain',
  },

  cardRate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderColor: COLORS.primary,
    borderRadius: 5,
    borderWidth: 1,
  },
});
