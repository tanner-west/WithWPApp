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
import HTML from 'react-native-render-html';
import axios from 'axios';
import Post from '../components/Post';
import {AllHtmlEntities} from 'html-entities';
import {format} from 'date-fns';
const entities = new AllHtmlEntities();

export default function PostScreen({route}) {
  const {post} = route.params;
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Post post={post} />
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
});
