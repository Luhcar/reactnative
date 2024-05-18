import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../components/atoms/Input';
import axios from 'axios';
import {getData} from '../storages/localStorage';

const CreateTodo = ({navigation}) => {
  const [todo, setTodo] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData('token').then(async res => {
      if (!res) {
        navigation.replace('Login');
      } else {
        setToken(res);
      }
    });
  });

  const saveTodo = () => {
    setLoading(true);

    axios
      .post(
        'https://example-api.darms.my.id/api/todos',
        {
          task_name: todo,
          is_completed: false,
        },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        },
      )
      .then(response => {
        Alert.alert('Success', 'Todo has been saved');
        navigation.navigate('Todolist');
        // setLoading(false);
      })
      .catch(error => {
        const err = error.response.data;
        Alert.alert('Error', err.message);
        // setLoading(false);
      })
      .finally(() => setLoading(false));
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input
          label="Todo"
          placeholder="Insert Todo"
          required
          value={todo}
          onChange={isiText => {
            setTodo(isiText);
          }}
        />

        {/* <TouchableOpacity 
            onPress={() => loading ? null : saveTodo()} 
            style={styles.btnLogin}>
          <Text style={styles.btnLoginText}>
            {loading ? 'Loading...' : 'Save'}
          </Text>
        </TouchableOpacity> */}

        {
            loading ? (
                <View style={styles.btnLogin}>
            <Text style={styles.btnLoginText}>
                Loading...
            </Text>
        </View>
            ) : (
                <TouchableOpacity 
            onPress={() => saveTodo()} 
            style={styles.btnLogin}>
          <Text style={styles.btnLoginText}>
            save
          </Text>
        </TouchableOpacity>
            )
        }

        

        
      </View>
    </View>
  );
};

export default CreateTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  form: {
    marginHorizontal: 20,
    marginTop: 20,
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
});
