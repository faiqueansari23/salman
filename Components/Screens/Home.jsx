import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Sample data for stories
const storiesData = [
  { id: '1', image: require('../image/SalmanKhan.webp'), username: 'Birthday' },
  { id: '2', image: require('../image/SalmanKhan.webp'), username: 'Love' },
  { id: '3', image: require('../image/SalmanKhan.webp'), username: 'Good Morning' },
  { id: '4', image: require('../image/SalmanKhan.webp'), username: 'Motivation' },
  { id: '5', image: require('../image/SalmanKhan.webp'), username: 'Political' },
  { id: '6', image: require('../image/SalmanKhan.webp'), username: 'Ajj Ka Darshan' },
  { id: '7', image: require('../image/SalmanKhan.webp'), username: 'Days Special' },
];

// Sample data for posts
const posts = [
  { id: '1', imageUrl: require('../image/SalmanKhan.webp'), postDescription: 'Beautiful scenery!' },
  { id: '2', imageUrl: require('../image/SalmanKhan.webp'), postDescription: 'Having a great time!' },
  { id: '3', imageUrl: require('../image/SalmanKhan.webp'), postDescription: 'Nature is amazing!' },
];

// Story Component
const Story = ({ item }) => (
  <TouchableOpacity style={styles.storyContainer}>
    <View style={styles.storyBorder}>
      <Image source={item.image} style={styles.storyImage} />
    </View>
    <Text style={styles.storyUsername}>{item.username}</Text>
  </TouchableOpacity>
);

// Instagram Post Card
const InstagramCard = ({ imageUrl, postDescription }) => (
  <View style={styles.card}>
    <Image source={imageUrl} style={styles.postImage} />
    <Text style={styles.postDescription}>{postDescription}</Text>

    <View style={styles.actions}>
      {/* Share Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Share</Text>
        <Ionicons name="share-social-outline" size={18} color="#FFF" style={styles.iconRight} />
      </TouchableOpacity>

      {/* Download Button */}
      <TouchableOpacity style={styles.button}>
        <Ionicons name="download-outline" size={18} color="#FFF" style={styles.iconLeft} />
        <Text style={styles.buttonText}>Download</Text>
      </TouchableOpacity>
    </View>

  </View>
);

// Home Component (Single File)
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      {/* Header */}
      <View style={styles.containerHeader}>
          <Text style={styles.containerHeaderText}>Brand Boast</Text>
      </View>

      {/* Stories Section */}
      <View style={styles.containerStory}>
        <FlatList
          data={storiesData}
          renderItem={({ item }) => <Story item={item} />}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesList}
        />
      </View>

      {/* Posts Section */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }}>
        {posts.map((post) => (
          <InstagramCard key={post.id} imageUrl={post.imageUrl} postDescription={post.postDescription} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  containerHeader:{
    height:50,
    width:"100%",
    justifyContent:"center",
    marginLeft:10,
    marginTop:10
     }
  ,
  containerHeaderText:{
    color:"#000",
    fontSize:35,
    fontFamily: "Billabong",
   
  },
  containerStory: {
    
    height: 120,
    paddingTop: 5,
  },
  storiesList: {
    paddingHorizontal: 10,
  },
  storyContainer: {
    marginRight: 10,
    alignItems: 'center',
    
  },
  storyBorder: {
    width: 78, // Adjust size to account for padding
    height: 78, // Adjust size to account for padding
    borderRadius: 39, // Half of width/height for perfect circle
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E1306C',
    overflow: 'hidden',
    padding: 4, // Add padding to create gap
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 35, // Make inner image circular
    resizeMode: 'cover',
  },
  
  storyUsername: {
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
    color: '#000',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 5 },
  },
  postImage: {
    width: '100%',
    height: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  postDescription: {
    padding: 10,
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10, 
    paddingVertical: 5,
    paddingLeft: 10, 
  },
  button: {
    backgroundColor: '#E1306C',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  iconRight: {
    marginLeft: 5,  // Icon right me shift hoga
  },
  iconLeft: {
    marginRight: 5, // Icon left me shift hoga
  },
});

export default Home;
