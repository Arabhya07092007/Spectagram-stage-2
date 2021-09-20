import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Icon } from 'react-native-elements';

let post = [
  {
    name: 'Arabhaya',
    caption: 'caption1',
    img: 'feknfd vdsvhbsdvnsdnvbds',
  },
  {
    name: 'Arabhaya',
    caption: 'caption1',
    img: 'feknfd vdsvhbsdvnsdnvbds',
  },
  {
    name: 'Arabhaya',
    caption: 'caption1',
    img: 'feknfd vdsvhbsdvnsdnvbds',
  },
  {
    name: 'Arabhaya',
    caption: 'caption1',
    img: 'feknfd vdsvhbsdvnsdnvbds',
  },
];

export default class Feed extends React.Component {
  renderItem = (item) => {
    console.log(item.name);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center', padding:10}}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 10 }}>
          Arabhaya
        </Text>
        <Text style={{ color: 'red' }}>{item.name}</Text>
        <Text>{item.caption}</Text>
        <Image
          source={require('../assets/image_1.jpg')}
          style={{ width: 260, height: 150, resizeMode: 'center' }}
        />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'red',
            justifyContent: 'center',
            width: 80,
            borderRadius: 20,
            padding: 5,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <Icon name="heart" type="ionicon" color="white" />
          <Text style={{ fontWeight: 'bold', color: 'white' }}>7k</Text>
        </View>
      </View>
    );
  };
  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <SafeAreaView style={styles.cont}>
        <StatusBar />
        <View style={{ flexDirection: 'row', margin: 10 }}>
          <Image source={require('../assets/logo.png')} style={styles.img} />
          <Text style={{ fontSize: 25, marginTop: 5, marginLeft: 10 }}>
            Spectagram
          </Text>
        </View>

        <ScrollView >
          <FlatList
            data={post}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  img: {
    width: RFValue(60),
    height: RFValue(60),
    backgroundColor: 'black',
    borderRadius: 50,
    borderWidth: 1,
  },
});
