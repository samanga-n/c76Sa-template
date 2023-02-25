import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform,StatusBar, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}>

               <SafeAreaView style={styles.droidSafeArea}/> 

               <View style={styles.titleBar}>
                <Text style={styles.titletext}>Iss Tracker App</Text>
                </View>

                <TouchableOpacity style={styles.routeCard}>
                   <Text style={styles.routeText}> Iss Location</Text>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.routeCard}>
                   <Text style={styles.routeText}> Meteors</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ff9032'
  },
  droidSafeArea:{
    marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
  },
  titleBar:{
    flex:0.15,
    justifyContent:"center",
    alignItems:"center",
    
  },
  titletext:{
    fontSize:40,
    fontWeight:'bold',
    color:'white'
  },
  routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    backgroundColor:'white',
    borderRadius:30
  },
  routeText:{
     fontSize:35,
     fontWeight:'bold',
     marginTop:40,
     paddingLeft:30
  }
})