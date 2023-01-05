import React, { useEffect, useState } from 'react';
 import { ActivityIndicator, FlatList, Text, View , StyleSheet, Button } from 'react-native';


export default function Home({ navigation }) {
    const [Data, setdata] = useState('');


    const gettiming = async () => {
        try {
            const response = await fetch('https://api.aladhan.com/v1/calendar?latitude=33.948495&longitude=72.42746&method=2&month=1&year=2023.json', gettiming);
            const get = await response.json();
            setdata(get.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        gettiming();
    }, []);
console.log('', Data)
    return (
        <View style={styles.container}>
          <Text style={{fontSize:30, fontStyle:"italic"}}> Timings</Text>
          <View style={styles.box1}>
        
            <FlatList
                data={Data}
               
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

})