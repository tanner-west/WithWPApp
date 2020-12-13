import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import HTML from 'react-native-render-html';

export default function Post({post: {id, title, content, acf}}) {
  return (
    <View>
      <Text style={styles.title}>{title.rendered}</Text>
      <HTML source={{html: content.rendered}} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});
