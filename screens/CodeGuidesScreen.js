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

import {AllHtmlEntities} from 'html-entities';
import {format} from 'date-fns';
import {TouchableOpacity} from 'react-native-gesture-handler';
const entities = new AllHtmlEntities();

export default function CodeGuidesScreen({navigation}) {
  const [postData, setPostData] = useState(undefined);
  useEffect(() => {
    axios
      .get('https://withwp.app/wp-json/wp/v2/posts')
      .then((res) => setPostData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {postData
            ? postData.map((post) => (
                <TouchableOpacity
                  key={post.id}
                  onPress={() =>
                    navigation.navigate('Blog Post', {post: post})
                  }>
                  <View style={styles.postContainer}>
                    <View style={styles.textContainer}>
                      <Text style={styles.title}>
                        {entities.decode(post.title.rendered)}
                      </Text>
                      <HTML source={{html: post.excerpt.rendered}} />
                      <Text>{format(new Date(post.date), 'MM/dd/yy')}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            : null}
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
