import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function Home() {
  const [location, setLocation] = useState(null);
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [timing, settiming] = useState("");

  const loc = ()=>{
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status != "granted") {
        console.log("Please grant location permission.");
        return;
      }
      let locacti = await Location.getCurrentPositionAsync({});
      setLocation(locacti);
      setlatitude(locacti.latitude);
      setlongitude(locacti.longitude);
    };
  }
  let lon;
  let Lat;
  if (errorMsg) {
    lon = errorMsg;
  } else if (location) {
    lon = JSON.stringify(longitude);
    Lat = JSON.stringify(latitude);
  }

  const Numaztiming = async () => {
    const responsive = {
      method:"Get"
    }
    try {
      const fetching = await fetch(
        'https://api.aladhan.com/v1/calendar?latitude=33.948495&longitude=72.42746&method=2&month=1&year=2023.json', Numaztiming
      );
      const get = await fetching.json();
      console.log(get.data);
      settiming(get.data);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(()=>{
    Numaztiming()
    loc();
  },[])

  return (
    <View style={styles.container}>
          <View style={styles.box1}>

      <FlatList
        data={timing}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.item}> {item.date.readable}</Text>
            <Text style={styles.item}> Fajar : {item.timings.Fajr}</Text>
            <Text style={styles.item}> Sunrise : {item.timings.Sunrise}</Text>
            <Text style={styles.item}> Dhuhr : {item.timings.Dhuhr}</Text>
            <Text style={styles.item}> Asr : {item.timings.Asr}</Text>
            <Text style={styles.item}> Sunset : {item.timings.Sunset}</Text>
            <Text style={styles.item}> Maghrib : {item.timings.Maghrib}</Text>
            <Text style={styles.item}> Isha : {item.timings.Isha}</Text>
          </View>
        )}
      />
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  item:{
    justifyContent:"center",
    fontSize:20,
  },
  box1:{
    backgroundColor:"red",
    width:400,
    height:400
  }
});
