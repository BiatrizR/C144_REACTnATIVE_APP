import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  Text,
} from "react-native";
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";
import Star from 'react-native-star-view';

export default class LikedMoviesScreen extends Component {
  constructor(props) {
    super(props);
    this.state ={
      data: [],
      ngrok_url:"https://6c67-201-71-11-105.ngrok.io"
    }
  }

  getLiked = () =>{
    const url = this.state.ngrok_url + "/liked";
    axios
    .get(url)
    .then(async (response) => {
      this.setState({ data: response.data.data });
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
  componentDidMount() {
    this.getLiked();
  }


  keyExtractor = (item, index) => index.toString();

  //4 exibir na tela com render item tirar o render
  renderItems = ({ item, index }) => {
    return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.posterImage}
          source={{ uri: item.poster_link }}
        ></Image>
        <View style={styles.movieTitleContainer}>
          <Text style={styles.title}>{item.original_title}</Text>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.subtitle}>{item.duration} min | </Text>
            <Star score={item.rating} style={styles.starStyle}/>
          </View>
        </View>
      </View>
    );
  };
  
  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
       
          <FlatList
            data={data}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItems}
          />
        
      </View>
    );
  }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  cardContainer: {
    borderRadius: RFValue(10),
    height: RFValue(200),
    marginHorizontal: RFValue(20),
    marginVertical: RFValue(15),
  },
  posterImage: {
    flex: 1,
    borderRadius: RFValue(10),
  },
  title: {
    fontSize: RFValue(15),
    fontWeight: "bold",
    color: "#3c8ed9",
    fontFamily: "monospace",
    marginVertical: RFValue(2),
  },
  subtitle: {
    fontSize: RFValue(10),
    fontWeight: "bold",
    color: "#3c8ed9",
    fontFamily: "monospace",
    marginVertical: RFValue(2),
  },
  movieTitleContainer: {
    position: "absolute",
    backgroundColor: "white",
    width:RFValue(250),
    padding: RFValue(10),
    bottom: RFValue(10),
    left: RFValue(10),
    borderRadius: RFValue(10),
    borderWidth:RFValue(2),
    borderColor:"#3c8ed9"
  },
  starStyle: {
    width: RFValue(75),
    height: RFValue(15),
  }
});
