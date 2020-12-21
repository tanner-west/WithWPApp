import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {AllHtmlEntities} from 'html-entities';
import {TouchableOpacity} from 'react-native-gesture-handler';
const sections = [
  {
    name: 'Code\nGuides',
    image: require('../assets/stone.jpg'),
    screen: 'Blog Posts',
  },
  {
    name: 'Blog',
    image: require('../assets/blossoms.jpg'),
    screen: 'Blog Posts',
  },
];

export default function PostsScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {sections.map((section) => (
            <TouchableOpacity
              key={section.name}
              onPress={() => navigation.navigate(section.screen)}>
              <View style={styles.sectionContainer}>
                <View style={styles.sectionImageContainer}>
                  <Image style={styles.sectionImage} source={section.image} />
                </View>
                <View style={styles.sectionTextContainer}>
                  <Text style={styles.sectionText}>
                    <Text>{section.name}</Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  postContainer: {flexDirection: 'row', padding: 10, flex: 1},
  textContainer: {
    flex: 2,
  },
  sectionContainer: {
    height: 300,
    borderRadius: 25,
    backgroundColor: 'white',
    margin: 15,
    flexDirection: 'column',
  },
  sectionImageContainer: {flex: 1},
  sectionImage: {
    height: 150,
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  sectionTextContainer: {
    backgroundColor: '#4d4d4d',
    flex: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
    padding: 15,
  },
});
