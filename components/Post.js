import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import HTML from 'react-native-render-html';
import {AllHtmlEntities} from 'html-entities';
const entities = new AllHtmlEntities();

export default function Post({post: {id, title, content, acf}}) {
  return (
    <View>
      {acf.main_image ? (
        <Image
          style={{height: 300}}
          source={{url: acf.main_image.sizes.large}}
        />
      ) : null}
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
