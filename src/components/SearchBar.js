import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import {ceinmaData, ceinmas, COLORS} from '../constants';

import {setOpenSearch} from '../app/reducers/appSlice';
import {useDispatch} from 'react-redux';

const SearchBar = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (searchText.length >= 1) {
      const itemsData = [...ceinmaData, ...ceinmas]
      
      const filterData = itemsData.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()),
      );
      setData(filterData);
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={{
          ...styles.input,
          borderBottomLeftRadius: searchText.length >= 1 ? 0 : 13,
          borderBottomRightRadius: searchText.length >= 1 ? 0 : 13,
        }}
        onChangeText={text => setSearchText(text)}
      />

      {searchText.length >= 1 && (
        <View style={styles.searchList}>
          {
            data.length >= 1 ? 
              data.map(item => (
                <Text key={item.id}>{item.name}</Text>
              ))
             : <Text>No movie found</Text>
          }
        </View>
      )}

      <TouchableOpacity
        style={styles.cancelBtn}
        onPress={() => dispatch(setOpenSearch(false))}>
        <Text style={styles.cancelTxt}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },

  input: {
    backgroundColor: COLORS.gray,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 65,
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },

  cancelBtn: {
    position: 'absolute',
    top: 10,
    bottom: 10,
    right: 0,
    paddingHorizontal: 10,
    borderColor: COLORS.white,
    borderLeftWidth: 1,
    justifyContent: 'center',
  },

  cancelTxt: {
    color: COLORS.white,
    fontWeight: 'bold',
  },

  searchList: {
    position: 'absolute',
    top: '100%',
    right: 0,
    left: 0,
    backgroundColor: COLORS.gray,
    maxHeight: 300,
    padding:30,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    borderTopWidth: 1,
    borderColor: COLORS.dark,
    overflow: 'scroll',
  },
});
