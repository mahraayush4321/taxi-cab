import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native';
const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{
        fontSize:15,
        top:500,
        left:15
      }}>Hello world</Text>
      <Text style={{
        fontSize:15,
        top:500,
        left:15
      }}>yo whatsup</Text>
      <View>
        <TouchableOpacity>
        onPress={() =>navigation.navigate("Mapscreen")}
        <Image
        style={{
          height:230,
          width:200,
          top:10,
          marginLeft:20,

        }}
        source={{
          uri:"https://img.freepik.com/free-vector/delivery-taxi-online-car-sharing-with-cartoon-character-smartphone-smart-city-transportation-concept-illustration_1150-39657.jpg?w=740&t=st=1664859421~exp=1664860021~hmac=849b63f130911a97fd9e3b0ea93836365d3abc9675ac37a55ff5ef2ec9b6a3c7"
        }}
        />
        <View>
          <TouchableOpacity>
          <Icon
          style={{
              width: 23.9,
              height: 23.8,
              backgroundColor: "orange",
              left:90,
              marginTop:12,
              marginBottom:10,
          }}
          name='rightcircle' color="blue" type="antdesign"
          />
          </TouchableOpacity>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{
          fontSize:30,
          fontStyle:"italic",
          bottom:5,
          color:'purple',
          left:40,
          marginHorizontal:15,
        }}>Get a ride</Text>
        
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default NavOptions

const styles = StyleSheet.create({})