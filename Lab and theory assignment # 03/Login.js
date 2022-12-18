import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {StyleSheet , View , Image, Text, Pressable,  TextInput, Alert } from "react-native";
export default function Login({navigation}){
    const[username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const getdata = async ()=>{
        const musername = await AsyncStorage.getItem("itemlist")
        const mupassword = await AsyncStorage.getItem("item")
        if(password==mupassword && username==musername){
            navigation.navigate("profile")
        }
        else{
            console.log("error")
        }

    }
    
return(
<View style = {styles.container} >
<View style = {styles.box1}>
<Image
style = {styles.Imagestyle}
source = {require("../assets/insta.png")}></Image>
</View>
<View >
<Text style = {{fontSize:25 , color:"white" , fontweight :
"bold", textDecorationLine:"underline", textDecorationStyle:"double"}}>Instagram</Text>
</View>

<TextInput 
 style={[styles.inputstyle2,{marginTop:30, height:40}]}
value={username}
onChangeText={(username) => setusername(username)}
placeholder="username"></TextInput>

<TextInput 
 style={[styles.inputstyle2,{marginTop:20,height:40}]}
value={password}
onChangeText={(password) => setpassword(password)}
placeholder="password"></TextInput>
<View style={styles.inputstyle3}>
    <Pressable
    onPress={()=>
    getdata()}>
<Text style = {styles.label} > login</Text>
</Pressable>
</View>
<View >
<Text style = {{ fontSize:12 , color:"white" , fontweight : "bold"}}>
Forgot your password
</Text>
</View>
<View
style = {styles.style1}>
    <Pressable onPress={()=>
    navigation.navigate("Create")
}>
<Text style = {{ fontSize:30 , color:"white" , fontweight : "bold"}}>
Create a Account
</Text>
</Pressable>
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
borderRadius:1,
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