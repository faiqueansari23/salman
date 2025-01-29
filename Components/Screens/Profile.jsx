import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const Profile = () => {
//   const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../image/SalmanKhan.webp')} // Replace with your image path
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Salman Khan</Text>
        <Text style={styles.phoneNumber}>8530700229</Text>
      </View>

      <View style={styles.settingsContainer}>
        <TouchableOpacity style={[styles.settingItem, styles.shadow]} onPress={() => alert('Contact Us clicked')}>
          <Text style={styles.settingText}>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.settingItem, styles.shadow]} onPress={() => alert('Change Language clicked')}>
          <Text style={styles.settingText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.settingItem, styles.shadow]} onPress={() => alert('About Us clicked')}>
          <Text style={styles.settingText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'black'
  },
  phoneNumber: {
    fontSize: 16,
    color: 'gray',
  },
  settingsContainer: {
    borderColor:'red',
    marginTop: 20,
  },
  settingItem: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,

  },
  settingText: {
    fontSize: 16,
    color:'black'


  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Profile;