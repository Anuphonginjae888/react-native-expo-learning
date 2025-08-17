import React from 'react';
import { StyleSheet, View, Image, SafeAreaView, StatusBar, Platform, Button } from 'react-native';

const DUMMY_IMAGE_1 = 'https://gdb.voanews.com/eea0b145-95d4-4532-9c69-d0fcd1833d53_cx0_cy25_cw0_w1023_r1_s.jpg';
const DUMMY_IMAGE_2 = 'https://thethaiger.com/th/wp-content/uploads/2023/06/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%A1%E0%B8%B5%E0%B8%A1.jpg';
const DUMMY_IMAGE_3 = 'https://www.matichon.co.th/wp-content/uploads/2021/09/120660632_thumbnail_chloesideeye_clean.jpg';

export default function FlexScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.profileContainer}>
        <Image source={{ uri: DUMMY_IMAGE_1 }} style={styles.profileImage} />
        <Image source={{ uri: DUMMY_IMAGE_2 }} style={styles.profileImage} />
        <Image source={{ uri: DUMMY_IMAGE_3 }} style={styles.profileImage} />
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title="Go to Home Screen"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  profileContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
