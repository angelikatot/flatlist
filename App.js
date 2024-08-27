import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function ShoppingListApp() {
  const [item, setItem] = useState('');
  const [todos, setTodos] = useState([]);

  // listalle lisääminen
  const addItem = () => {
    if (item.trim() !== '') {
      setTodos([...todos, { id: Date.now().toString(), key: item }]);
      setItem('');
    }
  };

  // funktio listan tyhjennys
  const clearList = () => {
    setTodos([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <TextInput
          style={styles.input}
          placeholder="______________"
          value={item}
          onChangeText={setItem}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={addItem}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={clearList}>
            <Text style={styles.buttonText}>CLEAR</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Shopping list</Text>
        <FlatList
          data={todos}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#ff66b2',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTitle: {
    color: '#C71585',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    width: '100%',
    paddingBottom: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
