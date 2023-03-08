export const COLORS = {
  primary: "#FEBE08",
  secondary: "#4D626C",
  white: "#FFF",
  gray: "#2B2A2D",
  dark:'#161616'
}

export const SIZES = {
  base: 10,
  font: 16,
  radius: 8,
  padding: 12,
  line:20
}

export const CONTAINER = {
  flex: 1,
  minHeight:"100%",
  paddingHorizontal:SIZES.padding,
  paddingTop:30,
  paddingBottom:90,
  backgroundColor:COLORS.dark,
}

export const SplashContainer = {
  minHeight:"100%",
  paddingHorizontal:35,
  paddingTop:30,
  backgroundColor:COLORS.dark,
}

export const TextStyle = {
  color:COLORS.white,
  fontSize:SIZES.font,
  textAlign:"center",
  lineHeight:SIZES.line
}

export const InputStyle = {
  backgroundColor:COLORS.gray,
  color:COLORS.white,
  borderRadius:SIZES.radius,
  width:"100%",
  height:52,
  paddingStart:10
}

export const ButContainer = {
  position:"absolute", 
  bottom:50, 
  left:0, 
  right:0, 
  alignItems:"center"
}