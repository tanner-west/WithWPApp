import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {AllHtmlEntities} from 'html-entities';
const entities = new AllHtmlEntities();

import HTML from 'react-native-render-html';

export default function Post({post: {id, title, content, acf}}) {
  return (
    <View>
      <Text style={styles.title}>{entities.decode(title.rendered)}</Text>
      <HTML source={{html: content.rendered}} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});
