import { StyleSheet, Text, View } from 'react-native'
import { ButContainer, COLORS, CONTAINER, intrestData, movieLagData, TextStyle } from '../constants'
import Header from '../components/Header'
import { InterestBtn, RectButton } from '../components/Butons'
import { useNavigation } from '@react-navigation/native'

const Interests = () => {
  const {navigate} = useNavigation()

  return (
    <View style={CONTAINER}>
      <Header />

      <Text style={{...TextStyle, marginBottom:25}}>
        What are your favorite genres ?
      </Text>

      <View
        style={styles.intrestContainer}
      >
        {intrestData.map(item => <InterestBtn key={item}>{item}</InterestBtn>)}
      </View>

      <Text style={{...TextStyle, marginVertical:25}}>
        Which languages do you prefer ?
      </Text>
      
      <View
        style={styles.intrestContainer}
      >
        {movieLagData.map(item => <InterestBtn key={item}>{item}</InterestBtn>)}
      </View>

      <View style={ButContainer}>
        <RectButton 
          BGcolor={COLORS.primary}
          color={COLORS.white}
          handlePress={()=> navigate('main')}
        >
          Confirm
        </RectButton>
      </View>
    </View>
  )
}

export default Interests

const styles = StyleSheet.create({
  intrestContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    gap:5,
    alignItems:"center",
    justifyContent:"center"
  }
})