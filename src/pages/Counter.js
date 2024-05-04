import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [nomor, setNomor] = useState(0)
    // nomor itu state, setNomor itu fungsi 

    function tambahNomor() {
        setNomor(nomor + 1)
    }

    function kuranNomor() {
        setNomor(nomor - 1)
    }
    

  return (
    <View style={{backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent : 'center'}}>
        <View>
            <TouchableOpacity
                onPress={() => kuranNomor()}
                style={{
                    backgroundColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                }}> 
                <Text style={{ color: 'black'}}>
                    Kurangi
                </Text>           
            </TouchableOpacity>

            <Text style={{color: 'black', marginVertical: 30, textAlign: 'center'}}>
            Nomor : {nomor}
            </Text>

            <TouchableOpacity
                onPress={() => tambahNomor()}
                style={{
                    backgroundColor: 'grey',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                }}>
                <Text style={{ color: 'black'}}>
                    Tambah
                </Text>           
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Counter
