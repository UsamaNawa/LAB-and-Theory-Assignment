import React from "react";
import {StyleSheet , View , Image, Text } from "react-native";
export default function App(){
return(
<View style = {styles.container} >
<View style = {styles.box1}>
<Image
style = {styles.Imagestyle}
source = {require("./assets/insta.png")}></Image>
</View>
<View >
<Text style = {{fontSize:25 , color:"white" , fontweight :
"bold"}}>Instagram</Text>
</View>
<View style={styles.inputstyle}>
<Text style = {styles.label}> User name</Text>
</View>
<View style={styles.inputstyle2}>
<Text style = {styles.label }> Password</Text>
</View>
<View style={styles.inputstyle3}>
<Text style = {styles.label} > login</Text>
</View>
<View >
<Text style = {{ fontSize:12 , color:"white" , fontweight : "bold"}}>
Forgot your password
</Text>
</View>
<View style = {styles.style1}>
<Text style = {{ fontSize:30 , color:"white" , fontweight : "bold"}}>
Create a Account
</Text>
</View>
</View>
);
}
const styles = StyleSheet.create({
container:{
backgroundColor : "#5F9EA0",
flex : 1,
flexDirection:"column",
justifyContent : "center",
alignItems : "center",
alignContent:"center",
textDecorationColor:"white",
textAlign:"center",
includeFontPadding:"center"
},
box1 : {
justifyContent:"center",
width : 50,
height : 50,
},
Imagestyle:{
justifyContent:"center",
width: 50,
height : 50
},
label:{
fontSize:18,
color:"#7d7d7d",
marginTop:10,
marginBottom:5,
lineHeight:25,
},
inputstyle:{
backgroundColor:"#f1f6f8",
marginTop:30,
borderWidth:1,
borderColor : "white",
paddingHorizontal:80,
paddingVertical:1,
borderRadius:2,
borderBottomLeftRadius : 20,
borderTopLeftRadius:20,
borderBottomRightRadius:20,
borderTopRightRadius:20, 
},
inputstyle2:{
backgroundColor:"#f1f6f8",
marginTop:5,
borderWidth:1,
borderColor : "white",
paddingHorizontal:80,
paddingVertical:1,
borderRadius:1,
borderBottomLeftRadius : 20,
borderTopLeftRadius:20,
borderBottomRightRadius:20,
borderTopRightRadius:20
},
inputstyle3:{
backgroundColor:"#ADD8E6",
marginTop:30,
borderWidth:1,
borderColor : "white",
paddingHorizontal:100,
paddingVertical:1,
borderRadius:1,
borderBottomLeftRadius : 20,
borderTopLeftRadius:20,
borderBottomRightRadius:20,
borderTopRightRadius:20
},
style1:{
textDecorationLine : "underline",
textDecorationColor:"white",
marginTop:50
},
})