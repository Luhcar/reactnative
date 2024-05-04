import { SafeAreaView, StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Label from '../components/atoms/Label'
import Input from '../components/atoms/Input'

const Login = () => {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [phonenumber, setPhoneNumber] = useState('')
  // const [password, setPassword] = useState('')

  // Lebih Rapihnya
  const [LoginForm, setLoginForm] = useState({
    username: '',
    email: '',
    phonenumber: '',
    password: '', 
  })

  function submitLogin() {
      const username = 'admin'

      // if(LoginForm.username != username) {
      //   Alert.alert('Username yang anda masukkan salah')
      //   return
      // }
      // Alert.alert('Login Berhasil')

      // Valdiasi Semua Harus Diisi

      if(LoginForm.username == ''){
        Alert.alert('Username harus diisi')
        return
      }
      
      if(LoginForm.email == ''){
        Alert.alert('email harus diisi')
        return
      }

      if(LoginForm.phonenumber == ''){
        Alert.alert('phonenumber harus diisi')
        return
      }

      if(LoginForm.password == ''){
        Alert.alert('password harus diisi')
        return
      }
      Alert.alert('Login Berhasil')
      setLoginForm({
        username: '',
        email: '',
        phonenumber: '',
        password: '', 
      })
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.titlePage}>
            Halaman Login
        </Text>
    <View style={styles.LoginForm}>
      <Input 
        label="Username"
        placeholder="Insert Username"
        required
        value={LoginForm.username}
        onChange={(isiText) => {
          setLoginForm({
            ...LoginForm,
            username: isiText
          })
        }}
      />

      <Input 
        label="Email"
        placeholder="Insert Email"
        required
        keyboardType="email-address"
        value={LoginForm.email}
        onChange={(isiText) => {
          setLoginForm({
            ...LoginForm,
            email: isiText
          })
        }}
      />

      <Input 
        label="Phone Number"
        placeholder="Insert Phone Number"
        required
        keyboardType="numeric"
        value={LoginForm.phonenumber}
        onChange={(isiText) => {
          setLoginForm({
            ...LoginForm,
            phonenumber: isiText
          })
        }}
      />

      <Input 
        label="Password"
        placeholder="Insert Paaword"
        required
        secure
        value={LoginForm.password}
        onChange={(isiText) => {
          setLoginForm({
            ...LoginForm,
            password: isiText
          })
        }}
      />


    {/* TOUCHABLE OPACITY */}
    <TouchableOpacity 
      onPress={() => submitLogin()}
      style={styles.btnLogin}>
        <Text style={styles.btnLoginText}>
            Let's Login
        </Text>
    </TouchableOpacity>
    </View>


    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    titlePage: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 0,
        color: 'black'
    },
    labelLoginInput:{
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 5,
    },
  
    btnLogin:{
        backgroundColor: '#3d67e3',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 10,
    },
    btnLoginText:{
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    LoginForm: {
        flex: 1,
        marginVertical: 97,
    }
})