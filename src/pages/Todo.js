import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {title} from 'process';
import {getData} from '../storages/localStorage';

export default function Todo({navigation}) {
  const [todo, setTodo] = useState([]);
  const [token, setToken] = useState('');

  useEffect(() => {
    getTodo();

    getData('token').then(async res => {
      if (!res) {
        navigation.replace('Login');
      } else {
        setToken(res);
      }
    });
  });

  const getTodo = () => {
    axios
      .get('https://example-api.darms.my.id/api/todos', {
        headers: {
          Authorization: 'Bearer ' + token,
        }
      })
      .then(response => {
        // parsing
        const data = response.data.data;
        setTodo(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const updateTodo = (id) => {
    axios
      .put(`https://example-api.darms.my.id/api/todos/${id}/complete`, {
        is_completed: true,
      },{
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        Alert.alert('Success', 'Todo has been updated');
        getTodo();
      })
      .catch(error => {
        const err = error.response.getData
        Alert.alert('Error', err.message); 
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Title Page */}
        <Text style={styles.headerTitle}>My Todo List</Text>

        {/* Button Create Todo */}
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateTodo')}
          style={styles.btnLogin}>
          <Text style={styles.btnLoginText}>Create Todo</Text>
        </TouchableOpacity>
      </View>

      {/* List Todo */}
      <View style={styles.listTodo}>
        <ScrollView>
          {todo.map((item, index) => {
            return (
              <View style={styles.itemTodo} key={index}>
                <View>
                  <Text style={styles.title}>
                    {index + 1}. {item.task_name}
                  </Text>
                  <Text style={styles.status}>
                    {item.is_completed ? 'Completed' : 'Not Completed'}
                  </Text>
                </View>
                {item.is_completed === false && (
                  <TouchableOpacity
                    onPress={() => updateTodo(item.id)}
                    style={styles.checklist}>
                    <Text style={styles.checklistLabel}>Checklist</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
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

  listTodo: {
    flex: 1,
    padding: 20,
    backgroundColor: 'yellow',
    paddingBottom: 55,
  },
  itemTodo: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  status: {
    color: 'grey',
  },
  checklist: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 50,
  },
  checklistLabel: {
    color: 'white',
  },
});
