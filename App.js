import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import axios from 'axios';

export default function App() {
  const [postData, setPostData] = useState(undefined);
  useEffect(() => {
    axios
      .get('https://withwp.app/wp-json/wp/v2/posts')
      .then((res) => setPostData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Text style={styles.heading}>My Posts</Text>
          {postData
            ? postData.map((post) => (
                <View key={post.id}>
                  <Text>{post.title.rendered}</Text>
                  <Text>{post.content.rendered}</Text>
                </View>
              ))
            : null}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
  },
  scrollView: {
    padding: 10,
  },
});
