import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../constants';
import {useSelector} from 'react-redux';
import {ChooseBtn, HoleChairs} from '../components';

const ChooseTime = () => {
  const [chooseDay, setChooseDay] = useState(0);
  const [chooseTime, setChooseTime] = useState(0);

  const [selecteHole, setSelecteHole] = useState(0);

  const {cinema} = useSelector(state => state.choose);

  const handleChooseDay = day => {
    setChooseDay(day);
  };

  const handleChooseTime = day => {
    setChooseTime(day);
  };

  return (
    <View>
      <View style={styles.header}>
        <ChooseBtn
          choosed={chooseDay}
          idx={0}
          handlePress={() => handleChooseDay(0)}>
          Today
        </ChooseBtn>

        <ChooseBtn
          choosed={chooseDay}
          idx={1}
          handlePress={() => handleChooseDay(1)}>
          Tomorrow
        </ChooseBtn>

        <ChooseBtn
          choosed={chooseDay}
          idx={2}
          handlePress={() => handleChooseDay(2)}>
          Sat 17 Sep
        </ChooseBtn>
      </View>

      <View style={{marginBottom: 20}}>
        <FlatList
          data={cinema.hole}
          keyExtractor={item => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          renderItem={({item, index}) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => setSelecteHole(index)}>
              <Image
                source={item.image}
                style={{
                  width: 288,
                  height: 144,
                  marginRight: 10,
                  borderRadius: SIZES.radius,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.header}>
          <ChooseBtn
            choosed={chooseTime}
            idx={0}
            handlePress={() => handleChooseTime(0)}>
            10:00 AM
          </ChooseBtn>

          <ChooseBtn
            choosed={chooseTime}
            idx={1}
            handlePress={() => handleChooseTime(1)}>
            2:00 PM
          </ChooseBtn>

          <ChooseBtn
            choosed={chooseTime}
            idx={2}
            handlePress={() => handleChooseTime(2)}>
            6:00 PM
          </ChooseBtn>

          <ChooseBtn
            choosed={chooseTime}
            idx={3}
            handlePress={() => handleChooseTime(3)}>
            10:00 PM
          </ChooseBtn>
        </View>
      </ScrollView>

      <View style={styles.hole}>
        <View style={styles.tv}></View>
        <HoleChairs selecteHole={selecteHole} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          flex:1,
          rowGap:10
        }}
      >
        <View style={{width:"50%", flexDirection: 'row'}}>
          <View style={[styles.mapItem,{backgroundColor:'#D4D4D4'}]}></View>

          <Text>ordinary</Text>
        </View>

        <View style={{width:"50%", flexDirection: 'row'}}>
          <View style={[styles.mapItem,{backgroundColor:COLORS.white}]}></View>

          <Text>premium</Text>
        </View>

        <View style={{width:"50%", flexDirection: 'row'}}>
          <View style={[styles.mapItem,{backgroundColor:'#707070'}]}></View>

          <Text>booked</Text>
        </View>

        <View style={{width:"50%", flexDirection: 'row'}}>
          <View style={[styles.mapItem,{backgroundColor:COLORS.primary}]}></View>

          <Text>your seat</Text>
        </View>
      </View>
    </View>
  );
};

export default ChooseTime;

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

  hole: {
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 25,
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.radius,
    alignItems: 'center',
  },

  tv: {
    width: '50%',
    height: 2,
    backgroundColor: COLORS.white,
    marginBottom: 25,
  },

  mapItem: {
    marginRight: 5,
    width: 20,
    height: 20,
    borderRadius: 4,
  },
});
