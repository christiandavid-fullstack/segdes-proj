import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Screen() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
         <Text style={styles.h1}>User Login</Text>
      </View>
     
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input}  
                   placeholder='Enter your email'/>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input}  
                   secureTextEntry={true} 
                   placeholder='Enter your password'/>
        <Button title='Confirm' onPress={()=>{}}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:"#f5f5f5",
  },
  title:{
    alignItems:"center",
    padding:20
  },
  h1:{
    fontSize:20,
  },
  form:{
     backgroundColor:"white",
     padding:20,
     borderRadius:10,
     shadowColor:'black',
     shadowOffset:{
      width:0,
      height:2
     },
     shadowOpacity:0.25,
     shadowRadius: 4,
     elevation:5
  },
  label:{
    fontSize:16,
    marginBottom: 5,
    fontWeight:"bold"
  },
  input:{
    height:40,
    borderColor:"#ddd",
    borderWidth:1,
    marginBottom:15,
    padding:10,
    borderRadius:5
  }
})