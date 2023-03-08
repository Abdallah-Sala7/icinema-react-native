import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import assets from '../assets/assets';
import {ceinmas, COLORS, SIZES} from '../constants';
import CinemaCard from './CinemaCard';

const ChooseCinema = () => {
  const [openSearch, setOpenSearch] = useState(true);
  const [cinemasData, setCinemasData] = useState(ceinmas)

  const handleSearch = (text) => {
    const filterdData = ceinmas.filter(item => item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()))

    setCinemasData(filterdData)
  }

  return (
    <View style={{flex:1}}>
      <View style={styles.headerContainer}>
        <View style={{flex: 1}}>
          {openSearch ? (
            <TextInput
              placeholder="Search"
              style={{height: 40, color: COLORS.white}}
              ref={input => input && input.focus()}
              onChangeText={text => handleSearch(text)}
            />
          ) : (
            <Text style={{fontSize: SIZES.font, color: COLORS.white}}>
              Choose Cinema
            </Text>
          )}
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => setOpenSearch(!openSearch)}>
            <Image
              source={openSearch ? assets.close : assets.search}
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image source={assets.filter} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={cinemasData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <CinemaCard item={item} />
        )}
      />
    </View>
  );
};

export default ChooseCinema;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.radius,
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#383838',
    paddingLeft: 10,
  },

  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
});
