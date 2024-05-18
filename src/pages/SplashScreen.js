import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { getData } from '../storages/localStorage'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
          getData('token').then(async res => {
            if (res) {
              navigation.replace('Main')
            } else {
              navigation.replace('Login')
            }
          })
        }, 2000)
    })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Rokudo
      </Text>
      <Text style={styles.desc}> 
        Manage Tour Time
      </Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        fontStyle: 'italic',
    },
    desc: {
        fontSize: 16,
        color: 'black',
    }
})