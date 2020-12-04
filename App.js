import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';
import axios from 'axios';
import Post from './components/Post';

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
            ? postData.map((post) => <Post post={post} key={post.id} />)
            : null}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  scrollView: {
    padding: 10,
  },
});
