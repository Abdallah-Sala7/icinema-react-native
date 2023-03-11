import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {COLORS, CONTAINER, TextStyle} from '../constants';
import {DetailsBtn, Header, RectButton} from '../components';
import assets from '../assets/assets';
import Video from 'react-native-video';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMovie } from '../app/reducers/chooseSlice';

const MovieDetail = () => {
  const {params} = useRoute();
  const {item} = params;
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  const [playing, setPlaying] = useState(false);

  const handleNavigate = () => {
    navigate('BookScreen');
    dispatch(setMovie(item));
    setPlaying(true);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={[CONTAINER,{paddingBottom:30}]}>
        <Header title />

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

                <Text style={{...TextStyle, textAlign: 'left'}}>
                  {item.disc}
                </Text>

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

        <View style={styles.videoCard}>
          <View style={styles.videoContainer}>
            <Video
              source={{
                uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
              }}
              ref={ref => {
                this.player = ref;
              }}
              onBuffer={this.onBuffer}
              onError={this.videoError}
              style={styles.backgroundVideo}
              paused={playing}
            />
          </View>

          <View style={{paddingHorizontal: 10, paddingVertical: 15}}>
            <Text
              style={{
                ...TextStyle,
                fontWeight: 'bold',
                textAlign: 'left',
              }}>
              Starring:
            </Text>

            <Text style={{...TextStyle, textAlign: 'left'}}>
              Brief: Jake Sully lives with his newfound family formed on the
              planet of Pandora. Once a familiar threat returns to finish what
              was previously started, Jake must work with Neytiri and the army
              of the Na'vi race to protect their planet
            </Text>
          </View>
        </View>

        <View style={{marginTop:30, alignItems:"center"}}>
          <RectButton
            BGcolor={COLORS.primary}
            color={COLORS.white}
            handlePress={handleNavigate}>
            Book Now
          </RectButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;

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

  videoCard: {
    flex: 1,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: COLORS.primary,
  },

  videoContainer: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
