import {useState, useEffect} from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, Text, TouchableOpacity,Button } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

export default function FilterResult({navigation,route}) {

    const [data,SetData]=useState([]);
    const {id}=route.params;
  
    useEffect(()=>{
      var url="https://api-example-udb.herokuapp.com/api/list/"+id;
  
      fetch(url).then((res)=> res.json()).then((resJson)=>SetData(resJson))
    },[]);
  
    return (
      <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ListItem bottomDivider>
              <Avatar rounded source={{uri: data.image}}></Avatar>
              <ListItem.Chevron/>
                <ListItem.Content>
                  <ListItem.Title>{data.name}</ListItem.Title>
                  <ListItem.Subtitle>{data.team}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
   
  });