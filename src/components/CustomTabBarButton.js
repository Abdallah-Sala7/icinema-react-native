import { Animated, StyleSheet, TouchableOpacity } from 'react-native'
import { useEffect, useRef } from 'react'
import { COLORS } from '../constants'

const CustomTabBarButton = (props) => {
  const {children, onPress, accessibilityState} = props
  const {selected} = accessibilityState;

  const viewRef = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (selected) {
      Animated.timing(viewRef,{
        toValue: -40,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }else{
      Animated.timing(viewRef,{
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [selected])
  
  return (
    <TouchableOpacity 
      style={{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
      }} 
      onPress={onPress}
      activeOpacity={0.5}
    >
      <Animated.View 
        style={[styles.tap,selected && styles.activeTap,{
          transform:[{translateY:viewRef}]
        }]}
      >
        {children}
      </Animated.View>
    </TouchableOpacity>
  )
}

export default CustomTabBarButton

const styles = StyleSheet.create({
  activeTap:{
    backgroundColor: COLORS.primary,
    borderWidth: 8,
    borderColor: COLORS.gray
  },
  tap:{
    width: 70,
    height: 70,
    backgroundColor: COLORS.gray,
    borderRadius: 60,
  }
})