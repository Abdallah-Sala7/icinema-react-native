import { useNavigation, useRoute } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import assets from '../assets/assets'
import { COLORS } from '../constants'

const Header = ({search}) => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View 
      style={{
        position:"relative", 
        flexDirection:"row", 
        justifyContent: search ? "justify-between" : "center",
        width:"100%",
        marginBottom:40
      }}
    >
      {
        !search && (
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
        )
      }

      <Text
        style={{
          color:COLORS.primary,
          fontSize:20,
          fontWeight:"bold",
          textTransform:"capitalize"
        }}
      >
        {route.name}
      </Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  back:{
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    top:0,
    left:0,
    width:24,
    height:24,
    backgroundColor:COLORS.gray,
    borderRadius:4
  }
})