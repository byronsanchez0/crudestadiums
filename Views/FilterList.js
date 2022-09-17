import { Text, View, StyleSheet,TextInput,Button} from 'react-native';
import {useState} from 'react';

export default function FilterList({navigation}) {

    const [id,onChangeId]=useState("");
    
  
    return (
      <View style={styles.container}>
        <Text>Busqueda de estadio</Text>
        <TextInput
        placeholder="Ingrese el id del estadio"
        style={styles.input} 
        onChangeText={onChangeId}
        value={id}
        />
        
        <Button
        title="Buscar"
        onPress={()=>
           navigation.navigate('Result',{id:id})
        }/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
     input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });