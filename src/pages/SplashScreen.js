import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
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