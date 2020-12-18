import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import HTML from 'react-native-render-html';
import {AllHtmlEntities} from 'html-entities';
const entities = new AllHtmlEntities();

export default function Post({post: {id, title, content, acf}}) {
  return (
    <View style={styles.container}>
      {acf.main_image ? (
        <Image
          style={{height: 300}}
          source={{url: acf.main_image.sizes.large}}
        />
      ) : null}
      <Text style={styles.title}>{entities.decode(title.rendered)}</Text>
      <HTML
        source={{html: content.rendered}}
        tagsStyles={{}}
        renderers={{
          blockquote: (
            htmlAttribs,
            children,
            convertedCSSStyles,
            passProps,
          ) => (
            <View key={passProps.key} style={styles.blockquote}>
              {children}
            </View>
          ),
          cite: (htmlAttribs, children, convertedCSSStyles, passProps) => (
            <Text key={passProps.key} style={styles.cite}>
              {children}
            </Text>
          ),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  blockquote: {
    borderLeftWidth: 2,
    borderLeftColor: 'black',
    paddingLeft: 10,
  },
  cite: {
    color: 'gray',
  },
  container: {
    marginHorizontal: 15,
  },
});
