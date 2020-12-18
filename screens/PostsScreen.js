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
const entities = new AllHtmlEntities();

export default function PostsScreen() {
  const [postData, setPostData] = useState(undefined);
  useEffect(() => {
    axios
      .get('https://withwp.app/wp-json/wp/v2/blog_posts')
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
            ? postData.map(({id, title, acf, excerpt, date}) => (
                <View key={id} style={styles.postContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.title}>
                      {entities.decode(title.rendered)}
                    </Text>
                    <HTML source={{html: excerpt.rendered}} />
                    <Text>{format(new Date(date), 'MM/dd/yy')}</Text>
                  </View>
                  <View style={{flex: 1}}>
                    {acf.main_image ? (
                      <Image
                        style={{height: 100, resizeMode: 'cover'}}
                        source={{url: acf.main_image.sizes.large}}
                      />
                    ) : null}
                  </View>
                </View>
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
