import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CounterScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Current Count: {count}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="เพิ่ม"
          onPress={() => setCount(count + 1)}
        />
        <Button
          title="ลด"
          onPress={() => setCount(prevCount => Math.max(prevCount - 1, 0))}
        />
      </View>

      <View style={styles.homeButton}>
        <Button
          title="กลับไปหน้า Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  homeButton: {
    marginTop: 20,
  },
});

export default CounterScreen;
