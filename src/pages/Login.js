import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Label from '../components/atoms/Label';
import Input from '../components/atoms/Input';
import {getData, storeData} from '../storages/localStorage';
import axios, {Axios} from 'axios';

const Login = ({navigation}) => {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [phonenumber, setPhoneNumber] = useState('')
  // const [password, setPassword] = useState('')

  // Lebih Rapihnya
  const [LoginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  function submitLogin() {
    const username = 'admin';

    // if(LoginForm.username != username) {
    //   Alert.alert('Username yang anda masukkan salah')
    //   return
    // }
    // Alert.alert('Login Berhasil')

    // Valdiasi Semua Harus Diisi
    if (LoginForm.email == '') {
      Alert.alert('email harus diisi');
      return;
    }

    if (LoginForm.password == '') {
      Alert.alert('password harus diisi');
      return;
    }

    // Jika vaidasi diatas sudah benar, maka akan muncul alert login berhasil
    // Alert.alert('Login Berhasil')

    // Untuk menyimpan data login ke local storage
    // storeData('auth', LoginForm);

    // Jika sudah behasil login, maka akan direset menjadi kosong
    // setLoginForm({
    //   email: '',
    //   password: '',
    // })

    // navigation.replace('Main')

    axios
      .post('https://example-api.darms.my.id/api/login', LoginForm)
      .then(response => {
        Alert.alert('Login Berhasil')
        const res = response.data
        storeData('auth', res.user)
        storeData('token', res.token);
        navigation.replace('Main')
      })
      .catch(error => {
        const err = error.response.data;
        console.log(err);
        Alert.alert('Login Gagal', err.message);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titlePage}>Halaman Login</Text>
      <View style={styles.LoginForm}>
        <Input
          label="Email"
          placeholder="Insert Email"
          required
          keyboardType="email-address"
          value={LoginForm.email}
          onChange={isiText => {
            setLoginForm({
              ...LoginForm,
              email: isiText,
            });
          }}
        />

        <Input
          label="Password"
          placeholder="Insert Pasword"
          required
          secure
          value={LoginForm.password}
          onChange={isiText => {
            setLoginForm({
              ...LoginForm,
              password: isiText,
            });
          }}
        />

        {/* TOUCHABLE OPACITY */}
        <TouchableOpacity onPress={() => submitLogin()} style={styles.btnLogin}>
          <Text style={styles.btnLoginText}>Let's Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  titlePage: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 0,
    color: 'black',
  },
  labelLoginInput: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 5,
  },
  btnLogin: {
    backgroundColor: '#3d67e3',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
  },
  btnLoginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  LoginForm: {
    flex: 1,
    marginVertical: 97,
  },
});
