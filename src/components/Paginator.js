import { Animated, StyleSheet, View } from 'react-native'
import { COLORS } from '../constants'

const Paginator = ({scrollX, data}) => {
  return (
    <View
      style={styles.paginator}
    >
      {
        data.map((_,i)=>{
          const inputRange = [(i-1) * 260, i*260, (i+1)*260]

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange:[8,16,8],
            extrapolate:"clamp"
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange:[0.3,1,0.3],
            extrapolate:"clamp"
          })

          return <Animated.View key={i} style={[styles.dot,{width:dotWidth, opacity:opacity}]} />
        })
      }
    </View>
  )
}

export default Paginator

const styles = StyleSheet.create({
  paginator:{
    position:"absolute",
    bottom:-15,
    left:0,
    right:0,
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'center'
  },
  dot:{
    width:8, 
    height:8, 
    borderRadius:10, 
    marginHorizontal:4, 
    backgroundColor:COLORS.primary,
    opacity:0.5
  }
})