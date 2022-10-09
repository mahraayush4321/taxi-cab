import { StyleSheet, Text, View,SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "react-native-tailwind-classnames"
import NavOptions from '../components/NavOptions'

const Homescreen = () => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
        <Image 
        style={{
          height:100,
          width:130,
          resizeMode:'contain',
          top:50,
          right:20,
          marginLeft:50,
        
        }}
        source={{
          uri:"https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png",
        }}
        />
        </TouchableOpacity>
      </View>
      <NavOptions/>
    </SafeAreaView>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  text:{
    fontStyle:'italic',
    fontSize:30,
    paddingTop:10,
  }
  
})