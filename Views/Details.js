import { StyleSheet, View, SafeAreaView, ScrollView, Text, Button } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

export default function Details({navigation,route}) {
  
    const {stadium}=route.params;
  
    return (
      <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <ListItem  bottomDivider>
              <Avatar rounded source={{uri: stadium.image}}></Avatar>
              <ListItem.Chevron/>
                <ListItem.Content>
                  <ListItem.Title>{stadium.name}</ListItem.Title>
                  <ListItem.Subtitle>{stadium.id}</ListItem.Subtitle>
                </ListItem.Content>
          </ListItem>
          <Button
            title="Delete"
            color="red"
            onPress={()=>{
              var url="https://api-example-udb.herokuapp.com/api/list/"+stadium.id;
              fetch(url,{
                  method: 'DELETE'
                  }).then((res)=>res.json()).then((resJson)=>alert(resJson.message)).then(navigation.navigate("List"))
            }}/>
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