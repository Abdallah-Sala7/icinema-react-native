import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "../constants";

export const RectButton = ({children, BGcolor, color=COLORS.dark, handlePress, mb, ...props }) => {
  return (
    <>
    <TouchableOpacity 
      activeOpacity={0.8}
      style={{
        backgroundColor: BGcolor,
        borderRadius: SIZES.radius,
        width: 200,
        height:40,
        marginBottom:mb,
        justifyContent:"center",
        ...props,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: SIZES.font,
          color: color,
          textAlign: "center",
          textTransform:"capitalize"
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
    </>
  );
};

export const InterestBtn = ({children}) => {
  const [activeInterest, setActiveInterest] = useState([])
  const handlePress = (activeItem) =>{
    if (activeInterest.includes(activeItem)) {
      const filteredItem = activeInterest.filter(item => item != activeItem)

      setActiveInterest(filteredItem)
    }else setActiveInterest([...activeInterest, activeItem])
  }
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handlePress(activeItem=children)}
      style={{
        backgroundColor: activeInterest.includes(children) ? COLORS.primary : COLORS.gray ,
        borderRadius: 16,
        paddingVertical:10,
        paddingHorizontal:12
      }}
    >
      <Text
        style={{
          fontSize: SIZES.font,
          color: COLORS.white,
          textAlign: "center",
          textTransform:"capitalize"
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export const DetailsBtn = ({children}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: COLORS.dark ,
        borderRadius: 16,
        paddingVertical:7,
        paddingHorizontal:10,

      }}
    >
      <Text
        style={{
          fontSize: SIZES.font,
          color: COLORS.white,
          textAlign: "center",
          textTransform:"capitalize"
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export const ChooseBtn = ({children, choosed, idx, handlePress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={handlePress}
      style={
        {
          borderRadius: SIZES.radius,
          paddingVertical: 5,
          paddingHorizontal: 10,
          backgroundColor: choosed === idx ? COLORS.primary : COLORS.gray,
        }
      }>
      <Text style={{color: COLORS.white, fontSize: SIZES.font}}>{children}</Text>
    </TouchableOpacity>
  );
};