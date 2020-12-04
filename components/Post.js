import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Post({post: {id, title, content}}) {
  return (
    <View>
      <Text style={styles.title}>{title.rendered}</Text>
      <Text>{content.rendered}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});
