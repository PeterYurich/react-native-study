import React, { useEffect } from 'react'
import {
  Text, View, Image,
  ImageBackground,
} from 'react-native';
import { css } from '@app/styles';

import { useSelector } from 'react-redux';
import { selectAuth } from '@app/redux/auth/authSelectors';

export default function ProfileScreen() {
  const { email } = useSelector(selectAuth)
  console.log('email from ProfileScreen: ', email);

  return (
    <View style={css.container}>
      <ImageBackground
        style={{ width: '100%', height: "100%", position: 'absolute', zIndex: -1 }}
        source={{ uri: 'https://www.freecodecamp.org/news/content/images/size/w2000/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg' }}></ImageBackground>
      <View style={{
        ...css.container,
        flex: 0,
        borderRadius: 20,
        backgroundColor: 'grey',
        marginBottom: 20,
        padding: 10
      }}
      >
        <Text>Default font</Text>
        <Image
          style={{ width: 100, height: 100, borderRadius: 20, }}
          source={require('../../assets/girl.png')} />
        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={{ width: 100, height: 100, marginTop: 10, borderRadius: 20 }} />
        <Text style={{ fontFamily: 'ShantellSans-Regular' }}>ShantellSans-Regular</Text>
      </View>
    </View>

  );
}
