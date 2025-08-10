import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CounterScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  return (
    <LinearGradient
      colors={['#FFD54F', '#FF9800']} // เหลือง -> ส้ม
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>📊 Counter</Text>
        <Text style={styles.counterText}>{count}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.addButton]}
            onPress={() => setCount(count + 1)}
          >
            <Text style={styles.buttonText}>➕ เพิ่ม</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.minusButton]}
            onPress={() => setCount(prev => Math.max(prev - 1, 0))}
          >
            <Text style={styles.buttonText}>➖ ลด</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={[styles.button, styles.homeButton]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>🏠 กลับหน้า Home</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#fff',
  },
  counterText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  addButton: {
    backgroundColor: '#28a745',
  },
  minusButton: {
    backgroundColor: '#dc3545',
  },
  homeButton: {
    backgroundColor: '#6c757d',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CounterScreen;
