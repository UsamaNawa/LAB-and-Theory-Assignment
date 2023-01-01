import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, View, Text } from "react-native";


const Home = () => {
  const [data, setdata] = useState();
  
  const fetch = async () => {
    axios.get("http://api.aladhan.com/v1/calendarByAddress")
    .then((response)=>{
      console.log(response)
      setdata(response)
    })
    .catch((error)=>{

      console.log(error)
    })
    
      }
      const post = ()=>{
        axios.post("http://api.aladhan.com/v1/calendarByAddress",{
          Fajar:"5:46 am",
          Sunrise:"7:15 am",
          Dhuhr:"12:14 pm",
          Asr:"3:35 pm",
          Maghrib:"5:13 pm",
          Isha : "6:42 pm"

        })
        .then((res)=>{
          return res.data
        })
        .catch((error)=>{
          console.log(error)
        })
      }
      

  

  useEffect(() => {
    fetch();
    post()
  }, []);

  

  return (
    <View style={styles.container}>
     <Text>{data}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    height: "100%",
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    height: 200,
    width: 400,
    alignSelf: "center",
  },
});

export default Home;
