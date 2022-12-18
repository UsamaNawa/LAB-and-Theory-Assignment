import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {StyleSheet , View , Image, Text, Pressable } from "react-native";
export default function Profile({navigation}){
    const [username, setusername]= useState("")
    useEffect(()=>{
        getinfo()
    }, [])
    

    const getinfo = async () => {
        try {
         const value=await AsyncStorage.getItem("itemlist").then(value);
          if (value!=null){
          setusername(value)
          }
        } catch (error) {
          console.log(error);
        }
      };
      

        
     
    return(
        <View style={styles.container}>
            <View style={styles.box1}>
                <Image style={styles.box2}
                source={require("../assets/insta.png")}></Image>
                <Text style={styles.textst}>
                   your name is : {username}
                </Text>
                <Pressable
                style={{marginTop:0}}
                onPress={()=>navigation.navigate("Login")}>log out </Pressable>
            </View>

        </View>

    )
}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",

},
box1:{
    width:600,
    height:600,
    backgroundColor:"#5F9EA0",
    alignItems:"center",
    textAlign:"center"

},
box2:{
    width:80,
    height:80,
    borderRadius:80/2,
    backgroundColor:"#5F9EA0",
    marginTop:20
},
textst:{
    fontSize:20
}
}
)