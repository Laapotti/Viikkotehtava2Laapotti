import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <Text> Show Modal message</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <Text> This is modal...</Text>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>close</Text>
          </Pressable>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    margin: 8,
  },
  field: {
    marginTop: 8,
    marginBottom: 8,
  },


});
