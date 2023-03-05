import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { setOpenSearch } from '../app/reducers/appSlice';
import { setLogin } from '../app/reducers/loginSlice';

import assets from '../assets/assets'
import { COLORS } from '../constants'
import SearchBar from './SearchBar'


const Header = ({search}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const {openSearch} = useSelector(state => state.app);

  async function handleLogout(){
    await AsyncStorage.removeItem("token");
    dispatch(setLogin(false));
    navigation.navigate("splash");
  }

  return (
    <View 
      style={{
        position:"relative", 
        flexDirection:"row", 
        justifyContent: search ? "space-between" : "center",
        alignItems:"center",
        marginBottom:40,
        height:50,
        gap:10,
        zIndex:1
      }}
    >
      {
        !search ? (
          <TouchableOpacity
            onPress={()=> navigation.goBack()}
            style={styles.back}
          >
            <Image
              source={assets.back}
              style={{
                width:10,
                height:10,
                resizeMode:"contain"
              }}
            />
          </TouchableOpacity>
        ):
          <TouchableOpacity
            style={{
              width:28,
              height:28,
              borderWidth:1,
              borderColor:COLORS.primary,
              borderRadius:30,
              overflow:"hidden",
            }}
            onPress={handleLogout}
          >
            <Image
              source={assets.abdallah}
              style={{
                width:26,
                height:26,
                resizeMode:"center",
                borderRadius:30
              }}
            />
          </TouchableOpacity>
      }

      {
        openSearch ? ( 
          <SearchBar />
        ) :(
        <Text
          style={{
            color:COLORS.primary,
            fontSize:20,
            fontWeight:"bold",
            textTransform:"capitalize"
          }}
        >
          {search ? "ICinema" : route.name}
        </Text>
        )
      }

      {
        search && (
          <TouchableOpacity
            onPress={()=> dispatch(setOpenSearch(true))}
          >
            <Image
              source={assets.search}
              style={{
                width:24,
                height:24,
                resizeMode:"contain"
              }}
            />
          </TouchableOpacity>
        )
      }

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  back:{
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    top:13,
    left:0,
    width:24,
    height:24,
    backgroundColor:COLORS.gray,
    borderRadius:4
  }
})