import {useNavigation} from '@react-navigation/native';
import {useRef} from 'react';
import {
  Animated,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, TextStyle} from '../constants';
import Paginator from './Paginator';

const Swiper = ({data, paginat, width, height, type, icon, movie}) => {
  const {navigate} = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  return (
    <View
      style={{
        width,
        height,
        alignSelf: 'center',
        marginBottom: 30,
        position: 'relative',
      }}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        snapToAlignment="center"
        onScroll={handleScroll}
        contentContainerStyle={{
          gap: 10,
        }}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => movie && navigate('MovieDetails', {item})}
            style={{
              width: type === 'ceinma' ? width : 144,
              height,
              borderRadius: 10,
              overflow: 'hidden',
              padding: type === 'movie' ? 10 : 0,
              backgroundColor: type === 'movie' ? COLORS.gray : 'transpernt',
            }}>
            <Image
              source={item.image}
              style={{
                flex: 0.85,
                width,
                resizeMode: 'cover',
                borderRadius: type === 'movie' ? 10 : 0,
              }}
            />

            <View
              style={{
                flex: 0.15,
                padding: 5,
                backgroundColor: COLORS.gray,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              {type === 'ceinma' ? (
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 12,
                    textAlign: 'center',
                  }}>
                  {item.disc}
                </Text>
              ) : (
                <>
                  <Text
                    style={{
                      ...TextStyle,
                      textAlign: 'left',
                      lineHeight: 30,
                    }}>
                    {item.name}
                  </Text>

                  <Image
                    source={icon}
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: 'contain',
                      tintColor: COLORS.primary,
                    }}
                  />
                </>
              )}
            </View>
          </TouchableOpacity>
        )}
      />

      {paginat && <Paginator data={data} scrollX={scrollX} />}
    </View>
  );
};

export default Swiper;
