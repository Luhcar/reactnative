import { View, Text, SafeAreaView, StyleSheet, Image, YellowBox, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getData, removeData } from '../storages/localStorage'

const Home = ({ navigation }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getData('auth').then(async res => {
      if (!res) {
        navigation.replace('Login');
      } else {
        setUser(res);
      }
    })
  })

  function logout() {
    removeData('auth');

    navigation.replace('Login');
  }

  return (
    <SafeAreaView style= {styles.container }>
    <View  style={{ backgroundColor:'red' }}>
      <Text style={{ color: 'blue' }}>Hello World </Text>
    </View>

    <View style = {styles.latarbelakang}>
      <Text style = {styles.judulLatarBelakang}>
        Hello {user?.username}
      </Text>
        <TouchableOpacity onPress={logout}>
          <Text>
            Logo Out
          </Text>
        </TouchableOpacity>
    </View>
    <View style={styleProduk.row}> 

    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={styleProduk.row}>
        {[1,2,3,4,5,6,,8,9,10].map(item => (
          <View key={item} style={styleProduk.card}>
      <Image source={require('../assets/images/laptop.jpg')} style={styleProduk.gambarProduk}/>
      <Text style={styleProduk.namaProduk}>
        Produk Laptop Shopee
      </Text>
          </View>
        ))}
      </ScrollView>
    </View>
    </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 20,
    //marginleft: 20,
    //marginVertical: 20,
    //marginHorizontal: 20,
    margin: 20,
    flex: 1,
    backgroundColor: 'grey'
  },
  latarbelakang: {
    backgroundColor: 'pink'
  },
  judulLatarBelakang: {
    color: 'blue',
    fontSize: 30,
    fontWeight:'bold',
    fontFamily: 'Arial'
  }
})

const styleProduk = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'yellow',
    justifyContent: 'center',
  },
  card: {
    borderWidth: 2,
    borderColor: 'skyblue',
    //borderRadius: 10,
    //borderTopRightRadius: 20,
    //borderBottomLeftRadius: 20,
    width: 140,
    height: 200,
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
  },
  gambarProduk: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    marginBottom: 5,
  },
  namaProduk: {
    color : 'black',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    textDecorationLine: 'none',
  }
})

const gaya = StyleSheet.create({
  latarbelakang: {
    backgroundColor: 'green'
  }
})
export default Home

