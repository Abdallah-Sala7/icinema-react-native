import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import { ButContainer, COLORS, CONTAINER, InputStyle, TextStyle } from '../constants'
import { RectButton } from '../components/Butons'
import { useNavigation } from '@react-navigation/native'

const NewUser = () => {
  const {navigate} = useNavigation()
  const [radio, setRadio] = useState('male')
  return (
    <View style={CONTAINER}>
      <Header />

      <View style={{marginTop:50}} >
        <Text style={styles.label}>
          Full Name
        </Text>

        <TextInput 
          style={InputStyle} 
          placeholder="Abdallah salah"
        />

        <Text style={styles.label}>
          Age
        </Text>

        <TextInput 
          style={InputStyle} 
          placeholder="23"
          keyboardType='number-pad'
        />

        <Text style={styles.label}>
          Gender
        </Text>

        <View style={{...InputStyle, flexDirection:"row",alignItems:"center" , gap:40}}>
          <TouchableOpacity  
            activeOpacity={0.7} 
            style={styles.radioBtn}
            onPress={()=> setRadio('male')}
          >
            <View style={styles.radio}>
              {radio === 'male' && <View style={styles.radioAvtive}></View>}
            </View>

            <Text style={{...TextStyle, lineHeight:30}}>Male</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.radioBtn}
            onPress={()=> setRadio('female')}
          >
            <View style={styles.radio}>
              {radio === 'female' && <View style={styles.radioAvtive}></View>}
            </View>

            <Text style={{...TextStyle, lineHeight:30}}>Female</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={ButContainer}>
        <RectButton 
          BGcolor={COLORS.primary} 
          color={COLORS.white} 
          handlePress={()=> navigate('register')}>
          Create Account
        </RectButton>
      </View>
    </View>
  )
}

export default NewUser

const styles = StyleSheet.create({
  label:{
    ...TextStyle, 
    marginVertical:12, 
    textAlign:"auto"
  },

  radioBtn:{
    flexDirection:"row",
    alignItems:"center",
    gap:5
  },

  radio:{
    alignItems:"center",
    justifyContent:"center",
    width:20,
    height:20,
    borderRadius:50,
    borderWidth:1,
    borderColor:COLORS.white
  },

  radioAvtive:{
    width:12,
    height:12,
    borderRadius:50,
    backgroundColor:COLORS.white
  }
})