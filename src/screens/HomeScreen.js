import {ScrollView, Text, useWindowDimensions, View} from 'react-native';
import {Header, RectButton, Swiper} from '../components';
import {COLORS, CONTAINER, ceinmaData, TextStyle, ceinmas} from '../constants';
import assets from '../assets/assets';

const HomeScreen = () => {
  const {width} = useWindowDimensions;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{...CONTAINER, paddingBottom: 90}}>
        <Header search />

        <Swiper
          data={ceinmaData}
          paginat={true}
          width={280}
          height={290}
          type={'ceinma'}
        />

        <RectButton
          color={COLORS.dark}
          BGcolor={COLORS.primary}
          width={200}
          alignSelf="center"
          mb={20}>
          View All
        </RectButton>

        <View>
          <Text style={{...TextStyle, textAlign: 'left', marginBottom: 20}}>
            For you
          </Text>

          <Swiper
            data={ceinmaData}
            paginat={false}
            width={width}
            height={230}
            type={'movie'}
            icon={assets.bookmark}
          />
        </View>

        <View>
          <Text style={{...TextStyle, textAlign: 'left', marginBottom: 20}}>
            Ceinmas
          </Text>

          <Swiper
            data={ceinmas}
            paginat={false}
            width={width}
            height={180}
            type={'movie'}
            icon={assets.follow}
          />
        </View>

        <View>
          <Text style={{...TextStyle, textAlign: 'left', marginBottom: 20}}>
            Showing Now
          </Text>

          <Swiper
            data={ceinmaData}
            paginat={false}
            width={width}
            height={230}
            type={'movie'}
            icon={assets.bookmark}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
